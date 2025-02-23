import mongoose, { Schema, Document } from 'mongoose'
import bcrypt from 'bcrypt'

import { EUserRoles } from '../types/user.types'

export interface IUser extends Document {
    name: string,
    email: string
    password: string
    role: EUserRoles,
    settings: {
        language: string
    }
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: EUserRoles.USER, enum: EUserRoles },
    settings: {
        language: { type: String }
    }
}, { collection: 'users', timestamps: true })


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

export default mongoose.model<IUser>('User', UserSchema)
