module.exports = ({ env }) => ({
    connection: {
        client: env('DATABASE_CLIENT', 'sqlite'),
        connection: env('DATABASE_CLIENT') === 'sqlite' ? {
            filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        } : {
            connectionString: env('DATABASE_URL'),
            ssl: env.bool('DATABASE_SSL', false) && {
                key: env('DATABASE_SSL_KEY', undefined),
                cert: env('DATABASE_SSL_CERT', undefined),
                ca: env('DATABASE_SSL_CA', undefined),
                caname: env('DATABASE_SSL_CANAME', undefined),
                rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
            },
        },
        debug: env.bool('DATABASE_DEBUG', false),
        pool: { 
            min: env.int('DATABASE_POOL_MIN', 2), 
            max: env.int('DATABASE_POOL_MAX', 10) 
        },
        acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    }
});