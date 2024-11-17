import { Application } from '../../src/server'
import bcrypt from 'bcrypt'

let app: Application

jest.mock('../../src/models/user.model', () => ({
    findOne: jest.fn()
}))

const mockUser = {
    name: 'User',
    email: 'user@test.ru',
    password: '123',
    role: 'user'
}

// Connect to the database before running tests
beforeAll(async () => {
    app = new Application(true)
    await app.ready()

    mockUser.password = await bcrypt.hash(mockUser.password, 10)

    const User = require('../../src/models/user.model')
    User.findOne.mockImplementation(({ email }: { email: string }) => {
        if (email === mockUser.email) {
            return {
                ...mockUser,
                toObject: () => mockUser
            }
        }
        return null
    })
})

// Close the server and database connection after tests
afterAll(async () => {
    await app.close()
})

describe('Integration Tests for Fastify Server', () => {
    test('Should handle a non-existent route with 404', async () => {
        const response = await app.inject({
            method: 'GET',
            url: '/non-existent-route'
        })
        expect(response.statusCode).toBe(404)
    })

    test('should return a token for valid login', async () => {
        const response = await app.inject({
            method: 'POST',
            url: '/user/login',
            payload: {
                email: mockUser.email,
                password: '123'
            },
            headers: {
                Cookie: 'deviceUUID=sampleDeviceUUID'
            }
        })

        expect(response.statusCode).toBe(200)
        const data = JSON.parse(response.payload)
        expect(data).toHaveProperty('user')
    })

    test('should return 401 for invalid email', async () => {
        const response = await app.inject({
            method: 'POST',
            url: '/user/login',
            payload: {
                email: 'wrong@example.com',
                password: 'password123'
            }
        })

        expect(response.statusCode).toBe(401)
        const data = JSON.parse(response.payload)
        expect(data.error).toBe('Invalid email or password')
    })

    test('should return 401 for invalid password', async () => {
        const response = await app.inject({
            method: 'POST',
            url: '/user/login',
            payload: {
                email: 'user@test.ru',
                password: 'wrongpassword'
            }
        })

        expect(response.statusCode).toBe(401)
        const data = JSON.parse(response.payload)
        expect(data.error).toBe('Invalid email or password')
    })
})
