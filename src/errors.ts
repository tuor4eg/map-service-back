export default {
    userErrors: {
        invalidEmailOrPassword: {
            errorCode: 401,
            message: 'Invalid email or password'
        },
        userNotFound: {
            errorCode: 404,
            message: 'User not found'
        },
        failedToUpdateUser: {
            errorCode: 500,
            message: 'Failed to update user'
        }
    },
    cameraErrors: {
        cameraNotFound: {
            errorCode: 404,
            message: 'Camera not found'
        },
        failedToUpdateCamera: {
            errorCode: 500,
            message: 'Failed to update camera'
        }
    }
}