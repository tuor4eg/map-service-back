import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { SignOptions, VerifyOptions } from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import User from '../models/user.model'

export interface FastifyJWT extends FastifyInstance {
    jwt: {
        sign: (payload: object, options?: SignOptions) => string
        verify: (token: string, options?: VerifyOptions) => object | string
      }
}

async function authRoutes(fastify: FastifyJWT) {
  fastify.post('/login', async (req, reply) => {
    const { email, password } = req.body as { email: string, password: string }

    // Check if email and password are provided
    if (!email || !password) {
      return reply.status(400).send({ error: 'Email and password are required' })
    }

    try {
      // Find user by email
      const user = await User.findOne({ email })

      if (!user) {
        return reply.status(401).send({ error: 'Invalid email or password' })
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (!isPasswordValid) {
        return reply.status(401).send({ error: 'Invalid email or password' })
      }

      // Create JWT using fastify's built-in jwt.sign method
      const token = fastify.jwt.sign(
        { userId: user._id, role: user.role },
        { expiresIn: '1h' }
      )

      return reply.send({ token })
    } catch (error) {
      return reply.status(500).send({ error: 'Internal server error' })
    }
  })
}

export default authRoutes
