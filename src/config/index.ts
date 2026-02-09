import API from '@/config/api';
import DATE_FORMAT from '@/config/date';

const config = {
    APP_NAME: 'Notes App',
    APP_URL: 'http://localhost:8018',

    BASE_URL: 'http://localhost:3018',
    SERVER_PORT: 3018,
    SERVER_URL: 'http://localhost:3018',

    API,
    DATE_FORMAT,

    MAX_ROWS_PER_PAGE: 200,

    SUPERADMIN: 'superadmin',
    DEBOUNCE_DURATION: 300, // milliseconds
    PREVIEW_IMG: '@/assets/images/backgrounds/preview-img.png'
};

Object.freeze(config);

/**
 * Do not overwrite process.env.CONFIG_ENV as this is changed in
 * transpile-time. Assigning to process.env.CONFIG_ENV will result in invalid
 * left-hand side assignment error
 *
 * Example:
 *
 * process.env.CONFIG_ENV = "development";
 *
 * transpiles to
 *
 * "development" = "development";
 *
 * To change the value, this is set in quasar.config.js > build > env
 */

export default {
    ...config,
    // ...(env_configs[process.env.CONFIG_ENV || 'development'] || {})
};
