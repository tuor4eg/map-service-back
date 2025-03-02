import { IUser } from '../models/user.model'
import CameraLocation, { ICameraLocation } from '../models/cameraLocation.model'
import errors from '../errors'

const { cameraErrors } = errors

export class CameraError extends Error {
    constructor(
        public errorCode: number,
        message: string
    ) {
        super(message)
    }
}

export class CameraController {
    async getCameraById(id: string): Promise<ICameraLocation> {
        const camera = await CameraLocation.findOne({ _id: id })

        if (!camera) {
            throw new CameraError(cameraErrors.cameraNotFound.errorCode, cameraErrors.cameraNotFound.message)
        }

        return camera
    }

    async getList(): Promise<Pick<ICameraLocation, 'title' | 'coordinates' | 'address' | '_id'>[]> {
        return await CameraLocation.getCluster()
    }

    async updateCamera(
        id: string, 
        updateData: Partial<Omit<ICameraLocation, '_id' | 'ownerId' | 'allowedUsers' | 'allowedRoles'>>
    ): Promise<ICameraLocation> {
        const camera = await CameraLocation.findOne({ _id: id })

        if (!camera) {
            throw new CameraError(cameraErrors.cameraNotFound.errorCode, cameraErrors.cameraNotFound.message)
        }

        // Remove _id from update data to prevent _id modification attempt
        delete (updateData as any)._id

        const updatedCamera = await CameraLocation.findByIdAndUpdate(
            id,
            { $set: updateData },
            { new: true }
        )

        if (!updatedCamera) {
            throw new CameraError(cameraErrors.failedToUpdateCamera.errorCode, cameraErrors.failedToUpdateCamera.message)
        }

        return updatedCamera
    }
} 