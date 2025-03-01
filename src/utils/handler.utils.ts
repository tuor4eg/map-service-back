import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'

export const errorHandler = async (
    error: FastifyError | any,
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const code = 'errorCode' in error ? error.errorCode : error.statusCode

    reply.status(code || 500).send({
        error: error.message || 'Internal server error'
    })
}
