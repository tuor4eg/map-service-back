import mongoose, { Schema, Document } from 'mongoose'

import { EUserRoles } from '../types/user.types'

export interface IUser extends Document {
    name: string,
    email: string
    password: string
    role: EUserRoles
}

const UserSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: EUserRoles.USER, enum: EUserRoles }
}, { collection: 'users', timestamps: true })

export default mongoose.model<IUser>('User', UserSchema)
