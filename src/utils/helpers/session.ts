import CryptoJS from 'crypto-js';

const SESSION_KEY = 'klika-token';
const ENCRYPTION_KEY = import.meta.env.VITE_ENCRYPTION_KEY;

export function store_session(data: { access_token: string; refresh_token: string }) {
    if (!data.access_token || !ENCRYPTION_KEY) {
        console.error('Missing access_token or encryption key');
        return;
    }

    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), ENCRYPTION_KEY).toString();

    localStorage.setItem(SESSION_KEY, encrypted);
}

export function get_session() {
    const encrypted = localStorage.getItem(SESSION_KEY);
    if (!encrypted || !ENCRYPTION_KEY) return null;

    try {
        const bytes = CryptoJS.AES.decrypt(encrypted, ENCRYPTION_KEY);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decrypted);
    } catch (error) {
        console.error('Decryption failed:', error);
        return null;
    }
}

export function clear_user_session() {
    localStorage.removeItem(SESSION_KEY);
}
