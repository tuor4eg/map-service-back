import jwt from 'jsonwebtoken'
import { IUser } from '../models/user.model'
import { getEnv } from '../helpers/env.helper'

const secret = getEnv('JWT_SECRET', '') as string
const expiresIn = getEnv('JWT_EXPIRED', '1h') as string

export const createToken = (user: IUser) => {
    return jwt.sign(
        { userId: user._id, role: user.role },
        secret,
        { expiresIn }
    )
}
