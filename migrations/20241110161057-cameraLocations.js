module.exports = {
    async up(db, client) {
        const ObjectId = require('mongoose').Types.ObjectId

        const cameras = [
            {
                title: 'Test camera',
                coordinates: [37.573856, 55.751574],
                description: 'Test camera description',
                url: 'https://test.ru',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                allowedRoles: ['user']
            },
            {
                title: 'Test camera 2',
                coordinates: [39.8768, 57.595066],
                description: 'Test camera description 2',
                url: 'https://test.ru',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f5')
            },
            {
                title: 'Test camera 3',
                coordinates: [39.8724346, 57.5928524],
                description: 'Test camera description 3',
                url: 'https://test.ru',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f5')
            }
        ]

        await db.collection('cameraLocations').insertMany(cameras)
    },

    async down(db, client) {
        await db.collection('cameraLocations').deleteMany({})
    }
}
