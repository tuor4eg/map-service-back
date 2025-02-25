import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'

export const errorHandler = async (
    error: FastifyError,
    request: FastifyRequest,
    reply: FastifyReply
) => {
    console.log(error)
    reply.status(error.statusCode || 500).send({
        status: error.statusCode || 500,
        error: error.message
    })
}
