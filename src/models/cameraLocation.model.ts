import mongoose, { Schema, Document, Model, Types } from 'mongoose'

export interface ICameraLocation extends Document {
    title: string
    coordinates: [number, number]
    subtitle: string,
    userId: Types.ObjectId
}

interface ICameraModel extends Model<ICameraLocation> {
    getCluster(): Promise<Array<ICameraLocation>>
}

const schema: Schema = new Schema(
    {
        title: { type: String, default: '' },
        coordinates: { type: Array, required: true, index: '2dsphere' },
        subtitle: { type: String, default: '' },
        userId: { type: Types.ObjectId, required: true, ref: 'User' }
    },
    { collection: 'cameraLocations', timestamps: true }
)

schema.statics.getCluster = async function () {
    const pipeline = [
        {
            $project: {
                _id: 1,
                coordinates: 1
            }
        }
    ]
    const results = await this.aggregate(pipeline)

    return results
}

export default mongoose.model<ICameraLocation, ICameraModel>('CameraLocation', schema)
