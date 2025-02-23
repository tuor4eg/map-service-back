const { access } = require('fs')

module.exports = {
    async up(db, client) {
        const ObjectId = require('mongoose').Types.ObjectId

        const cameras = [
            {
                title: 'Труфанова 34, камера 3',
                coordinates: [57.690381, 39.760063],
                description: '',
                url: 'https://saferegion.net/cams/view/WyhgyCpc/',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'truf34a_3',
                        password: '78sn25'
                    }
                }
            },
            {
                title: 'Труфанова 34, камера 9',
                coordinates: [57.690381, 39.760063],
                description: '',
                url: 'https://saferegion.net/cams/view/7iEBriYS/',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'truf34a_3',
                        password: '78sn25'
                    }
                }
            },
            {
                title: 'Труфанова 34, камера 10',
                coordinates: [57.690381, 39.760063],
                description: '',
                url: 'https://saferegion.net/cams/view/Tepgw56s/',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'truf34a_3',
                        password: '78sn25'
                    }
                }
            },
            {
                title: 'Труфанова 34, камера 11',
                coordinates: [57.690381, 39.760063],
                description: '',
                url: 'https://saferegion.net/cams/view/7ClrYAM0/',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'truf34a_3',
                        password: '78sn25'
                    }
                }
            },
            {
                title: 'Труфанова 34, камера 12',
                coordinates: [57.690381, 39.760063],
                description: '',
                url: 'https://saferegion.net/cams/view/MIAZfhdK/',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'truf34a_3',
                        password: '78sn25'
                    }
                }
            },
            {
                title: 'Труфанова 34, камера 13',
                coordinates: [57.690381, 39.760063],
                description: '',
                url: 'https://saferegion.net/cams/view/VLkEiqOB/',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'truf34a_3',
                        password: '78sn25'
                    }
                }
            },
            {
                title: 'Труфанова 34, камера 14',
                coordinates: [57.690381, 39.760063],
                description: '',
                url: 'https://saferegion.net/cams/view/VLkEiqOB/',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'truf34a_3',
                        password: '78sn25'
                    }
                }
            },
            {
                title: 'Труфанова 34, камера 18',
                coordinates: [57.690381, 39.760063],
                description: '',
                url: 'https://saferegion.net/cams/view/5pCH4Y0o/',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'truf34a_3',
                        password: '78sn25'
                    }
                }
            },
            {
                title: 'Лисицына 57',
                coordinates: [57.627672, 39.853174],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Ольхон',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@Olkhon76'
                        }
                    ]
                }
            },
            {
                title: 'Свердлова 74а',
                coordinates: [57.631869, 39.861663],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Реалист',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@UlaRealist'
                        },
                        {
                            type: 'phone',
                            value: '+79261709101'
                        }
                    ]
                }
            },
            {
                title: 'Гражданская 35',
                coordinates: [56.730400, 38.831520],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Черничка',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@Katerinka435'
                        },
                        {
                            type: 'phone',
                            value: '+79657257124'
                        }
                    ]
                }
            },
            {
                title: 'Норские резиденции, Додонова 6, камера 1',
                coordinates: [57.726525, 39.760450],
                description: '',
                url: 'https://vs.domru.ru/account/camera/69051939/view.html?backPage=1',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'NorskieResidencii',
                        password: 'Norsk2022'
                    }
                }
            },
            {
                title: 'Норские резиденции, Додонова 6, камера 2',
                coordinates: [57.726525, 39.760450],
                description: '',
                url: 'https://vs.domru.ru/account/camera/69052195/view.html?backPage=1',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'NorskieResidencii',
                        password: 'Norsk2022'
                    }
                }
            },
            {
                title: 'Норские резиденции, Додонова 6, камера 3',
                coordinates: [57.726525, 39.760450],
                description: '',
                url: 'https://vs.domru.ru/account/camera/69052227/view.html?backPage=1',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'NorskieResidencii',
                        password: 'Norsk2022'
                    }
                }
            },
            {
                title: 'Норские резиденции, парковая зона, камера 4',
                coordinates: [57.723811, 39.757218],
                description: '',
                url: 'https://vs.domru.ru/account/camera/99029579/view?group=45980963',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'NorskieResidencii',
                        password: 'Norsk2022'
                    }
                }
            },
            {
                title: 'Норские резиденции, парковая зона, камера 5',
                coordinates: [57.723811, 39.757218],
                description: '',
                url: 'https://vs.domru.ru/account/camera/99029707/view?group=45980963',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'NorskieResidencii',
                        password: 'Norsk2022'
                    }
                }
            },
            {
                title: 'Норские резиденции, Додонова 8, камера 6',
                coordinates: [57.726655, 39.761968],
                description: '',
                url: 'https://vs.domru.ru/account/camera/91513303/view?group=26289047',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'NorskieResidencii',
                        password: 'Norsk2022'
                    }
                }
            },
            {
                title: 'Норские резиденции, Додонова 8, камера 7',
                coordinates: [57.726655, 39.761968],
                description: '',
                url: 'https://vs.domru.ru/account/camera/91513397/view?group=26289047',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'NorskieResidencii',
                        password: 'Norsk2022'
                    }
                }
            },
            {
                title: 'Спортгородок центр, камера 8',
                coordinates: [57.723527, 39.757791],
                description: '',
                url: 'https://vs.domru.ru/account/camera/41689/view?group=26289561',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'NorskieResidencii',
                        password: 'Norsk2022'
                    }
                }
            },
            {
                title: 'Спортгородок центральный вход, камера 9',
                coordinates: [57.723527, 39.757791],
                description: '',
                url: 'https://vs.domru.ru/account/camera/172135/view?group=26289561',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'NorskieResidencii',
                        password: 'Norsk2022'
                    }
                }
            },
            {
                title: 'Спортгородок волейбольная площадка, камера 10',
                coordinates: [57.723527, 39.757791],
                description: '',
                url: 'https://vs.domru.ru/account/camera/1153033/view?group=26289561',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'NorskieResidencii',
                        password: 'Norsk2022'
                    }
                }
            }
        ]

        await db.collection('cameraLocations').insertMany(cameras)
    },

    async down(db, client) {
        await db.collection('cameraLocations').deleteMany({})
    }
}
