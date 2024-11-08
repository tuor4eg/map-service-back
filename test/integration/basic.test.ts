import { fastify, connectDB } from '../../src/server'

// Connect to the database before running tests
beforeAll(async () => {
    await connectDB()
})

// Close the server and database connection after tests
afterAll(async () => {
    await fastify.close()
})

describe('Integration Tests for Fastify Server', () => {
    test('Server should return 200 on root endpoint', async () => {
        const response = await fastify.inject({
            method: 'GET',
            url: '/'
        })
        expect(response.statusCode).toBe(200)
    })

    test('Should handle a non-existent route with 404', async () => {
        const response = await fastify.inject({
            method: 'GET',
            url: '/non-existent-route'
        })
        expect(response.statusCode).toBe(404)
    })
})
