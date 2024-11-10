import mongoose, { Schema, Document } from 'mongoose'

export interface ICameraLocation extends Document {
    title: string
    coordinates: [number, number]
    subtitle: string
}

const CameraLocationSchema: Schema = new Schema({
    title: { type: String, required: true },
    coordinates: { type: Array, required: true, index: '2dsphere' },
    subtitle: { type: String, default: '' }
}, { collection: 'cameraLocations', timestamps: true })

export default mongoose.model<ICameraLocation>('CameraLocation', CameraLocationSchema)
