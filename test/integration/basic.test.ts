import { fastify, connectDB } from '../../src/server'
import bcrypt from 'bcrypt'
import User from '../../src/models/user.model'



// Connect to the database before running tests
beforeAll(async () => {
    await connectDB()

    const mockUser = {
        _id: '12345',
        email: 'test@example.com',
        password: await bcrypt.hash('password123', 10), // Хэшируем пароль
        role: 'admin'
      }
      
      // Мок функции User.findOne
      jest.mock('../../src/models/user.model', () => ({
        findOne: jest.fn().mockImplementation(({ email }) => {
          return email === mockUser.email ? mockUser : null
        })
      }))
})

// Close the server and database connection after tests
afterAll(async () => {
    await fastify.close()
})

describe('Integration Tests for Fastify Server', () => {
    test('Should handle a non-existent route with 404', async () => {
        const response = await fastify.inject({
            method: 'GET',
            url: '/non-existent-route'
        })
        expect(response.statusCode).toBe(404)
    })

    test('should return a token for valid login', async () => {
        const response = await fastify.inject({
          method: 'POST',
          url: '/login',
          payload: {
            email: 'test@example.com',
            password: 'password123'
          }
        })
    
        expect(response.statusCode).toBe(200)
        const data = JSON.parse(response.payload)
        expect(data).toHaveProperty('token')
      })
    
      test('should return 401 for invalid email', async () => {
        const response = await fastify.inject({
          method: 'POST',
          url: '/login',
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
        const response = await fastify.inject({
          method: 'POST',
          url: '/login',
          payload: {
            email: 'test@example.com',
            password: 'wrongpassword'
          }
        })
    
        expect(response.statusCode).toBe(401)
        const data = JSON.parse(response.payload)
        expect(data.error).toBe('Invalid email or password')
      })
})
