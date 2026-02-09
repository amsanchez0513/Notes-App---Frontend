import axios from 'axios';
import { router } from '@/router';
import { get_session, store_session, clear_user_session } from '@/utils/helpers/session';

// Get the current token from the session
export async function auth_fetch(url: string, options: any = {}) {
    const session = get_session();

    if (!session) {
        throw new Error('No session found');
    }

    const { access_token, refresh_token } = session;

    // Attach the access token to the Authorization header
    options.headers = {
        ...options.headers,
        Authorization: `Bearer ${access_token}`,
    };

    try {
        const response = await axios(url, options);

        // If the token is expired, attempt to refresh it
        if (response.status === 401) {
            const refreshedTokens = await refresh_token(refresh_token);
            store_session(refreshedTokens);

            // Retry the request with the new token
            options.headers.Authorization = `Bearer ${refreshedTokens.access_token}`;
            return axios(url, options);
        }

        return response;
    } catch (refreshErr) {
        clear_user_session();
        router.push('/'); // Optional: redirect to login
        throw new Error('Session expired. Please log in again.');
    }
}

// Call the backend to refresh the token
async function refresh_token(refresh_token: string) {
    const response = await axios.post('/auth/refresh', { refresh_token });
    return response.data; // { access_token, refresh_token }
}
