import bcrypt from 'bcrypt'
import User, { IUser } from '../models/user.model'
import errors from '../errors'
import { TUpdateUserBody } from '../schemas/user.schema'

const { userErrors } = errors

export class UserError extends Error {
    constructor(
        public errorCode: number,
        message: string
    ) {
        super(message)
    }
}

export class UserController {
    async validateUser(email: string, password: string): Promise<IUser> {
        const user = await User.getUser('email', email)

        if (!user) {
            throw new UserError(userErrors.invalidEmailOrPassword.errorCode, userErrors.invalidEmailOrPassword.message)
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            throw new UserError(userErrors.invalidEmailOrPassword.errorCode, userErrors.invalidEmailOrPassword.message)
        }

        return user
    }

    async getUserById(id: string): Promise<IUser> {
        const user = await User.getUser('_id', id)

        if (!user) {
            throw new UserError(userErrors.userNotFound.errorCode, userErrors.userNotFound.message)
        }

        return user
    }

    async getUserByEmail(email: string): Promise<IUser> {
        const user = await User.getUser('email', email)

        if (!user) {
            throw new UserError(userErrors.userNotFound.errorCode, userErrors.userNotFound.message)
        }

        return user
    }

    async updateUser(_id: string, updateData: TUpdateUserBody): Promise<IUser> {
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10)
        }

        const user = (await User.findOneAndUpdate(
            { _id },
            { $set: updateData },
            { new: true }
        ))?.toObject()

        if (!user) {
            throw new UserError(userErrors.failedToUpdateUser.errorCode, userErrors.failedToUpdateUser.message)
        }

        return user
    }

    async getUserByTelegramId(id: string): Promise<IUser> {
        const user = await User.getUser('accounts.telegram', id)

        if (!user) {
            throw new UserError(userErrors.userNotFound.errorCode, userErrors.userNotFound.message)
        }

        return user
    }
} 