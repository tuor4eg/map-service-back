import { getEnv } from './helpers/env.helper'

const NODE_ENV = getEnv('NODE_ENV', 'development') as string

const HOST = getEnv('HOST', 'localhost') as string
const PORT = getEnv('PORT', 3000) as number

const LOG_LEVEL = getEnv('LOG_LEVEL', 'info') as string
const LOG_TRANSPORT = getEnv('LOG_TRANSPORT', true) as boolean

const JWT_SECRET = getEnv('JWT_SECRET', '')
const JWT_REFRESH_TOKEN = getEnv('JWT_REFRESH_TOKEN', '')
const JWT_EXPIRED = getEnv('JWT_EXPIRED', '1h') as string
const JWT_REFRESH_EXPIRED = getEnv('JWT_REFRESH_EXPIRED', '7d') as string

const FRONT_URL = getEnv('FRONT_URL', 'http://localhost:3000') as string

const MONGO_URI = getEnv(
    'MONGO_URI',
    'mongodb://172.17.0.1:27017/map-service-db'
) as string

const REDIS_HOST = getEnv('REDIS_HOST', 'localhost') as string
const REDIS_PORT = getEnv('REDIS_PORT', 6379) as number
const REDIS_PASSWORD = getEnv('REDIS_PASSWORD', '') as string
const REDIS_PREFIX = getEnv('REDIS_PREFIX', '') as string

export default {
    env: NODE_ENV,
    host: HOST,
    port: PORT,
    log: {
        level: LOG_LEVEL,
        transport: LOG_TRANSPORT
    },
    jwt: {
        secret: JWT_SECRET,
        refreshSecret: JWT_REFRESH_TOKEN,
        expired: JWT_EXPIRED,
        refreshExpired: JWT_REFRESH_EXPIRED
    },
    api: {
        frontURL: FRONT_URL
    },
    mongo: {
        uri: MONGO_URI
    },
    redis: {
        host: REDIS_HOST,
        port: REDIS_PORT,
        password: REDIS_PASSWORD,
        prefix: REDIS_PREFIX
    }
}