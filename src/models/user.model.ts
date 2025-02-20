import mongoose, { Schema, Document } from 'mongoose'

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

export default mongoose.model<IUser>('User', UserSchema)
