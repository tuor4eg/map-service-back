import bcrypt from 'bcrypt'
import User, { IUser } from '../models/user.model'
import errors from '../errors'

const { userErrors } = errors
type IUserResponse = Pick<IUser, 'email' | 'name' | 'role' | 'settings'> & { id: string }

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
        const user = (await User.findOne({ email }))?.toObject()

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
        const user = (await User.findOne({ _id: id }))?.toObject()

        if (!user) {
            throw new UserError(userErrors.userNotFound.errorCode, userErrors.userNotFound.message)
        }

        return user
    }

    async getUserByEmail(email: string): Promise<IUser> {
        const user = (await User.findOne({ email }))?.toObject()

        if (!user) {
            throw new UserError(userErrors.userNotFound.errorCode, userErrors.userNotFound.message)
        }

        return user
    }

    async updateUser(_id: string, updateData: {
        email?: string
        password?: string
        name?: string
        settings?: { language?: string }
    }): Promise<IUser> {
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

    formatResponseUser(user: IUser): IUserResponse {
        return {
            email: user.email,
            name: user.name,
            role: user.role,
            id: user._id!.toString(),
            settings: user.settings
        }
    }
} 