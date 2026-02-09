import CryptoJS from 'crypto-js';
import { get } from 'lodash';
import { store_session, clear_user_session } from '@/utils/helpers/session';

const SECRET = 'dev-secret-key'; // For mock signing (use env in real app)

export function auth_user(user: any) {
    const users = [
        {
            id: user.id,
            username: user.username,
            password: user.password,
            email: user.email,
            first_name: user.first_name,
            lastName: user.last_name,
            avatar: user.picture,
        },
    ];

    const realFetch = window.fetch;

    window.fetch = function (url: any, opts: any) {
        return new Promise((resolve, reject) => {
            setTimeout(handleRoute, 500);

            function handleRoute() {
                switch (true) {
                    case url.endsWith('/auth/refresh') && opts.method === 'POST':
                        return refresh();
                    case url.endsWith('/users') && opts.method === 'GET':
                        return getUsers();
                    default:
                        return realFetch(url, opts).then(resolve).catch(reject);
                }
            }

            function refresh() {
                const { refresh_token } = body();
                if (!refresh_token) return error('Missing refresh token');

                const payload = parse_jwt(refresh_token);
                if (!payload || is_expired(payload)) return unauthorized();

                const user = users.find((x) => x.email === payload.email);
                if (!user) return unauthorized();

                const new_access_token = generate_jwt(user, 15 * 60);
                return ok({ access_token: new_access_token });
            }

            function getUsers() {
                const token = get_bearer_token();
                const payload = parse_jwt(token);

                if (!token || !payload || is_expired(payload)) return unauthorized();
                return ok(users);
            }

            function get_bearer_token() {
                const auth = opts.headers['Authorization'];
                return auth && auth.startsWith('Bearer ') ? auth.split(' ')[1] : null;
            }

            function generate_jwt(user: any, expires_in_sec: number) {
                const header = { alg: 'HS256', typ: 'JWT' };
                const payload = {
                    id: user.id,
                    email: user.email,
                    exp: Math.floor(Date.now() / 1000) + expires_in_sec,
                };
                const base64Header = btoa(JSON.stringify(header));
                const base64Payload = btoa(JSON.stringify(payload));
                const signature = CryptoJS.HmacSHA256(`${base64Header}.${base64Payload}`, SECRET).toString();
                return `${base64Header}.${base64Payload}.${signature}`;
            }

            function parse_jwt(token: string) {
                try {
                    const base64Payload = token.split('.')[1];
                    const payload = JSON.parse(atob(base64Payload));
                    return payload;
                } catch {
                    return null;
                }
            }

            function ok(body: any) {
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
            }

            function error(message: string) {
                resolve({
                    status: 400,
                    text: () => Promise.resolve(JSON.stringify({ message }))
                });
            }

            function unauthorized() {
                clear_user_session();
                resolve({
                    status: 401,
                    text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' }))
                });
            }

            function body() {
                return opts.body && JSON.parse(opts.body);
            }
        });
    };
}

export function is_expired(payload: any) {
    const expires_in = get(payload, 'exp');
    return expires_in < Math.floor(Date.now() / 1000);
}
