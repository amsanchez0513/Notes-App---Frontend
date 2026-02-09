import _ from 'lodash';
import qs from 'qs';
import axios from 'axios';
import config from '@/config/index';

const apiConfig = {
    baseURL: config.API.BASE_URL,
    paramsSerializer: (params: any) => {
        return qs.stringify(params, { arrayFormat: 'repeat' });
    },
    // withCredentials: true,
};
const $submit = async (method: any, endpoint: string, payload = null, cache: any = null) => {
    const key = qs.stringify(payload) + endpoint;
    if (cache) {
        /**
         * check if data available in local storage
         */

        if (localStorage.has(key)) {
            const cached_response = localStorage.getItem(key);
            /**
             * check if data expiry date passed or not
             */
            if (Date.now() > cached_response.expiry) {
                localStorage.remove(key);
            } else {
                return cached_response.value;
            }
        }
    }
    try {
        const api = axios.create(apiConfig);
        let response;

        if (_.toLower(method) === 'get') {
            // Use 'params' for GET requests
            response = await api.get(endpoint, {
                params: payload,
            });
        } else {
            // Use 'data' for other requests
            response = await api[_.toLower(method)](endpoint, payload);
        }

        response = {
            httpStatus: {
                code: response.status,
                text: response.statusText,
            },
            metadata: _.omit(response.data, ['data']),
            data: _.cloneDeep(response.data.data),
        };

        if (cache) {
            /**
             * cache response in local storage
             */
            localStorage.set(key, {
                value: response,
                expiry: Date.now() + cache.ttl * 1000,
            });
        }

        return response;
    }
 catch (error: any) {
        // general handler for when error is not from axios (i.e. no response prop)
        if (!error.response || error.response.status >= 500) {
            throw {
                error: 'server_error_notice',
                message: 'server_error_notice',
            };
        }

        throw {
            httpStatus: {
                code: error.response.status,
                text: error.response.statusText,
            },
            code: error.response.data.code,
            message: error.response.data.message,
            error: error.response.data.error,
        };
    }
};

export const $api = {
    $get: (endpoint: string, payload = null) => {
        return $submit('get', endpoint, payload);
    },
    $post: (endpoint: string, payload = null) => {
        return $submit('post', endpoint, payload);
    },
    $put: (endpoint: string, payload = null) => {
        return $submit('put', endpoint, payload);
    },
    $patch: (endpoint: string, payload = null) => {
        return $submit('patch', endpoint, payload);
    },
    $delete: (endpoint: string, payload = null) => {
        return $submit('delete', endpoint, payload);
    },
};
