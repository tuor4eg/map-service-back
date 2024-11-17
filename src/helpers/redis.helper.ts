import env from "../env"

const prefix = env.redis.prefix

export const makeKey = (...args: (string | number | boolean)[]): string => {
    return `${prefix}-${args.map(arg => String(arg)).join('-')}`
}