import mongoose, { Schema, Document } from 'mongoose'

enum Eroles {
    ADMIN = 'admin',
    USER = 'user'
}

export interface IUser extends Document {
    email: string
    password: string
    role: Eroles
}

const UserSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: Eroles.USER, enum: Eroles }
})

export default mongoose.model<IUser>('User', UserSchema)
