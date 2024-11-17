import { FastifyError, FastifyReply, FastifyRequest } from "fastify"

export const errorHandler = async (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    reply.status(500).send({
        status: 500,
        error: error.message
    })
}