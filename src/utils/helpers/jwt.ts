export function parse_jwt(token: string): any {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(atob(base64));
    } catch (e) {
        return null;
    }
}

export function is_token_expired(token: string): boolean {
    const payload = parse_jwt(token);
    if (!payload || !payload.exp) return true;

    const now = Math.floor(Date.now() / 1000); // in seconds
    return payload.exp < now;
}
