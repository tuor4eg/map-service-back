import env from '../env'

export const getLoggerSettings = () => {
    return {
        level: env.log.level,
        transport: env.log.transport ? {
            target: 'pino-pretty',
            options: {
                colorize: true
            }
        } : undefined
    }
}
