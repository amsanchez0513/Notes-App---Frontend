// import { get, set } from 'lodash';
import moment from 'moment';
import config from '@/config/index';
import { useAppSettingsStore } from '@/stores/app-settings';
import axios from 'axios';
import { useUserStore } from '@/stores/user';
import { v4 as uuid } from 'uuid';

const $app_settings = useAppSettingsStore();

export function format_date(date: any, format = config.DATE_FORMAT.DEFAULT) {
    if (!date) return '';

    const momentDate = moment(date);

    if (format === config.DATE_FORMAT.HUMANIZED) {
        return momentDate.fromNow(); // e.g., "in 30 days", "2 days ago"
    }

    return momentDate.format(format);
}

export function is_valid_strict_date_format(value: any) {
    if (!value) {
        return false;
    }

    return moment(value, config.DATE_FORMAT.ISO_DATE, true).isValid();
}

export function get_error_messages(validation: any) {
    if (!validation || !validation.$errors) return [];

    return validation.$errors.map((error: { $message: any }) => error.$message);
}

export function get_full_name(user: any) {
    return `${user.first_name} ${user.last_name}`;
}

export function convert_to_currency(amount: number) {
    return amount * $app_settings.currency_amount;
}

export function format_number(value: number, decimals: number = 2): string {
    return value.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });
}

export function is_base64_image(data: string): boolean {
    const regex = /^data:image\/(png|jpeg|jpg|gif|webp);base64,[A-Za-z0-9+/=]+$/;
    return regex.test(data);
}

export function is_image_size_valid(file_size: number, max_size = config.DEFAULTS.THUMBNAIL_SIZE_LIMIT): boolean {
    return file_size <= max_size;
}

export async function upload_image($item: any) {
    const $user = useUserStore();
    const user = JSON.parse(localStorage.getItem('user'));

    const params = {
        user_id: user.id,
        type: 'google',
    };
    const user_sso = await $user.get_sso(params);

    return new Promise(async (resolve, reject) => {
        const dateTime = Date.now();
        const unique_id: string = uuid();
        const file_name = `${unique_id}_${dateTime}`;
        const file_type = $item.type;
        const image = $item.file;
        const binary = atob(image.split(',')[1]);
        const array = [];

        for (let i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        const blobData = new Blob([new Uint8Array(array)], { type: file_type });

        try {
            const file_response = await axios.post(
                `${config.GOOGLE.STORAGE_API}${config.GOOGLE_DRIVE_FOLDERS.ITEMS}%2F${file_name}`,
                blobData,
                {
                    headers: {
                        Authorization: `Bearer ${user_sso.data[0].access_token}`,
                        'Content-Type': file_type,
                    },
                }
            );

            resolve(file_response.data);
        } catch (error) {
            reject(error);
        }
    });
}

export function get_thumbnail_url(thumbnail_id: string): string {
    const is_file_changed = is_base64_image(thumbnail_id);
    const matched_id = thumbnail_id?.match(/\/d\/([^/]+)/);

    if (!thumbnail_id) {
        return config.PREVIEW_IMG;
    }

    if (is_file_changed) {
        return thumbnail_id;
    }

    const extracted_id = matched_id?.[1] || thumbnail_id;
    return `${config.GOOGLE.IMAGE_URL}${extracted_id}`;
}
