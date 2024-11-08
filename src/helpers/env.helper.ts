import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../.env') })


export const getEnv = (key: string | number | boolean, defaultValue: string | number | boolean): string | number | boolean => {
    const value = process.env[String(key)] || defaultValue
    if (!isNaN(Number(value))) return Number(value)
    if (String(value).toLowerCase() === 'true') return true
    if (String(value).toLowerCase() === 'false') return false
    return value
}