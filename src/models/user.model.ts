import mongoose, { Schema, Document, Types, Model } from 'mongoose'
import bcrypt from 'bcrypt'

import { EUserRoles } from '../types/user.types'

export interface IUser extends Document {
    _id: Types.ObjectId,
    name: string,
    email: string
    password: string
    role: EUserRoles,
    settings: {
        language: string
    }
    accounts: {
        telegramId: number
        phone: string
    }
}

interface IUserModel extends Model<IUser> {
    getUser(field: string, value: string): Promise<IUser | null>
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: EUserRoles.USER, enum: EUserRoles },
    settings: {
        language: { type: String }
    },
    accounts: {
        telegramId: { type: Number },
        phone: { type: String }
    }
}, { collection: 'users', timestamps: true })

UserSchema.statics.getUser = async function(field: string, value: string): Promise<IUser | null> {
    const user = (await this.findOne({ [field]: value }))?.toObject()

    if (!user) {
        return null
    }

    delete user.password

    return user
}


UserSchema.pre('save', async function(this: IUser, next) {
    if (!this.isModified('password')) {
        return next();
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(this.password)) {
        const error = new Error('Password must be at least 8 characters long and contain numbers, uppercase and lowercase letters');
        return next(error);
    }

    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)

        next();
    } catch (error: any) {
        return next(error)
    }
});

export default mongoose.model<IUser, IUserModel>('User', UserSchema)
