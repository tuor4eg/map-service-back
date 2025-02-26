import mongoose, { Schema, Document, Model, Types } from 'mongoose'
import { IUser } from './user.model'
import { EUserRoles } from '../types/user.types'

enum ECameraAccessType {
    BASIC_AUTH = 'basic_auth'
}

enum EContactType {
    PHONE = 'phone',
    EMAIL = 'email',
    TELEGRAM = 'telegram',
    WHATSAPP = 'whatsapp',
    VIBER = 'viber'
}

interface ICameraAccessCredentials {
    [ECameraAccessType.BASIC_AUTH]: {
        login: string
        password: string
    }
}

interface IContactAccount {
    type: EContactType
    value: string
}

interface IOwnerContact {
    name: string
    accounts: IContactAccount[]
}

export interface ICameraLocation extends Document {
    title: string
    coordinates: [number, number]
    description: string
    ownerId: Types.ObjectId
    allowedUsers: Types.ObjectId[]
    allowedRoles: EUserRoles[]
    url: string
    access?: {
        type: ECameraAccessType
        credentials: ICameraAccessCredentials[ECameraAccessType]
    }
    ownerContact?: IOwnerContact
}

interface ICameraModel extends Model<ICameraLocation> {
    getCluster(): Promise<Array<ICameraLocation>>
    getListByUser(user: IUser): Promise<Array<Pick<ICameraLocation, 'title' | 'coordinates'>>>
}

const schema: Schema = new Schema(
    {
        title: { type: String, default: '' },
        coordinates: { type: Array, required: true, index: '2dsphere' },
        address: { type: String, default: '' },
        description: { type: String, default: '' },
        ownerId: { type: Types.ObjectId, required: true, ref: 'User' },
        allowedUsers: [{ type: Types.ObjectId, ref: 'User' }],
        allowedRoles: [{ type: String, enum: Object.values(EUserRoles) }],
        url: { type: String, default: '' },
        access: {
            type: { type: String, enum: Object.values(ECameraAccessType) },
            credentials: { type: Map, of: String }
        },
        ownerContact: {
            name: { type: String },
            accounts: [{
                type: { type: String, enum: Object.values(EContactType) },
                value: { type: String }
            }]
        }
    },
    { collection: 'cameraLocations', timestamps: true }
)

schema.statics.getCluster = async function () {
    const pipeline = [
        {
            $project: {
                _id: 1,
                coordinates: 1,
                title: 1,
                address: 1
            }
        },
        {
            $sort: { title: 1 as 1 }
        }
    ]
    const results = await this.aggregate(pipeline)

    return results
}

schema.statics.getListByUser = async function(user: IUser) {
    if (user.role === EUserRoles.ADMIN) {
        const pipeline = [
            {
                $project: {
                    title: 1,
                    coordinates: 1,
                    _id: 1,
                    address: 1
                }
            },
            {
                $sort: { title: 1 as 1 }
            }
        ]
        return await this.aggregate(pipeline)
    }

    const pipeline = [
        {
            $match: {
                $or: [
                    { ownerId: user._id },
                    { allowedUsers: { $in: [user._id] } },
                    { allowedRoles: { $in: [user.role] } }
                ]
            }
        },
        {
            $project: {
                title: 1,
                coordinates: 1,
                _id: 1
            }
        },
        {
            $sort: { title: 1 as 1 }
        }
    ]
    return await this.aggregate(pipeline)
}

export default mongoose.model<ICameraLocation, ICameraModel>('CameraLocation', schema)
