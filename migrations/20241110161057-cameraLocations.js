module.exports = {
    async up(db, client) {
        const cameras = [
            {
                title: 'Test camera',
                coordinates: [37.573856, 55.751574],
                subtitle: 'Test camera description'
            }
        ]

        await db.collection('cameraLocations').insertMany(cameras)
    },

    async down(db, client) {
        await db.collection('users').deleteMany({})
    }
}
