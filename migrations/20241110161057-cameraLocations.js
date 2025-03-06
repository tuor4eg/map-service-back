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
            },
            {
                title: 'ул.Бабушкина, 1',
                coordinates: [58.059431, 38.773857],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Максола',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@maksola_art'
                        },
                        {
                            type: 'phone',
                            value: '89161160634'
                        }
                    ]
                }
            },
            {
                title: 'ул.Солнечная, 7а',
                coordinates: [58.053907, 38.785517],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Максола',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@maksola_art'
                        },
                        {
                            type: 'phone',
                            value: '89161160634'
                        }
                    ]
                }
            },
            {
                title: 'Норские резиденции, Романовская, 6, 8, камера 1',
                coordinates: [57.723040, 39.754494],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3493/view?group=26288961',
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
                title: 'Норские резиденции, Романовская, 6, 8, камера 2',
                coordinates: [57.723040, 39.754494],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3503/view.html?backPage=1',
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
                title: 'Норские резиденции, Романовская, 6, 8, камера 3',
                coordinates: [57.723040, 39.754494],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3575/view.html?backPage=1',
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
                title: 'Норские резиденции, Романовская, 6, 8, камера 4',
                coordinates: [57.723040, 39.754494],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3611/view.html?backPage=1',
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
                title: 'Норские резиденции, Романовская, 6, 8, камера 5',
                coordinates: [57.723040, 39.754494],
                description: '',
                url: 'https://vs.domru.ru/account/camera/22257379/view.html?backPage=2',
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
                title: 'Норские резиденции, Романовская, 6, 8, камера 6',
                coordinates: [57.723040, 39.754494],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3623/view.html?backPage=2',
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
                title: 'Норские резиденции, Романовская, 10, 12, камера 1',
                coordinates: [57.722915, 39.755509],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3543/view?group=26288963',
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
                title: 'Норские резиденции, Романовская, 10, 12, камера 2',
                coordinates: [57.722915, 39.755509],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3555/view.html?backPage=1',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'NorskieResidencii',
                        password: 'Norsk2022'
                    }
                }
            },
            
            // Продолжаем добавлять камеры из CSV
            {
                title: 'Норские резиденции, Романовская, 14, 16, камера 1',
                coordinates: [57.722180, 39.756632],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3567/view?group=26288965',
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
                title: 'Норские резиденции, Романовская, 14, 16, камера 2',
                coordinates: [57.722180, 39.756632],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3607/view.html?backPage=1',
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
                title: 'Норские резиденции, Романовская, 14, 16, камера 3',
                coordinates: [57.722180, 39.756632],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3627/view.html?backPage=1',
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
                title: 'Норские резиденции, Романовская, 14, 16, камера 4',
                coordinates: [57.722180, 39.756632],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3639/view.html?backPage=1',
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
                title: 'Норские резиденции, Романовская, 14, 16, камера 5',
                coordinates: [57.722180, 39.756632],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3643/view.html?backPage=2',
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
                title: 'Норские резиденции, Романовская, 14, 16, камера 6',
                coordinates: [57.722180, 39.756632],
                description: '',
                url: 'https://vs.domru.ru/account/camera/22257391/view.html?backPage=2',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'NorskieResidencii',
                        password: 'Norsk2022'
                    }
                }
            },
            
            // Продолжаем добавлять остальные камеры...
            {
                title: 'Норские резиденции, Романовская, 2, 4, камера 1',
                coordinates: [57.724194, 39.753029],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3547/view?group=26288967',
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
                title: 'Норские резиденции, Романовская, 2, 4, камера 2',
                coordinates: [57.724194, 39.753029],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3551/view?group=26288967',
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
                title: 'Норские резиденции, Романовская, 2, 4, камера 3',
                coordinates: [57.724194, 39.753029],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3563/view?group=26288967',
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
                title: 'Норские резиденции, Романовская, 2, 4, камера 4',
                coordinates: [57.724194, 39.753029],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3619/view?group=26288967',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'NorskieResidencii',
                        password: 'Norsk2022'
                    }
                }
            },
            
            // Продолжаем добавлять камеры из CSV
            {
                title: 'Норские резиденции, Романовская, 13, 15, камера 1',
                coordinates: [57.722517, 39.757072],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3535/view?group=26288971',
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
                title: 'Норские резиденции, Романовская, 13, 15, камера 2',
                coordinates: [57.722517, 39.757072],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3559/view?group=26288971',
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
                title: 'Норские резиденции, Романовская, 13, 15, камера 3',
                coordinates: [57.722517, 39.757072],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3595/view?group=26288971',
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
                title: 'Норские резиденции, Романовская, 13, 15, камера 4',
                coordinates: [57.722517, 39.757072],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3571/view?group=26288971',
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
                title: 'Норские резиденции, Романовская, 9, 11, камера 1',
                coordinates: [57.723247, 39.755976],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3539/view.html?backPage=1',
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
                title: 'Норские резиденции, Романовская, 9, 11, камера 2',
                coordinates: [57.723247, 39.755976],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3631/view.html?backPage=1',
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
                title: 'Норские резиденции, Романовская, 5, 7, камера 1',
                coordinates: [57.723906, 39.754467],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3579/view.html?backPage=1',
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
                title: 'Норские резиденции, Романовская, 5, 7, камера 2',
                coordinates: [57.723906, 39.754467],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3587/view.html?backPage=1',
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
                title: 'Норские резиденции, Романовская, 5, 7, камера 3',
                coordinates: [57.723906, 39.754467],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3591/view.html?backPage=1',
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
                title: 'Норские резиденции, Романовская, 5, 7, камера 4',
                coordinates: [57.723906, 39.754467],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3615/view.html?backPage=1',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'NorskieResidencii',
                        password: 'Norsk2022'
                    }
                }
            },
            
            // Продолжаем добавлять камеры
            {
                title: 'Норские резиденции, Романовская, 1, 3, камера 1',
                coordinates: [57.724824, 39.753407],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3583/view?group=26288979',
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
                title: 'Норские резиденции, Романовская, 1, 3, камера 2',
                coordinates: [57.724824, 39.753407],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3635/view?group=26288979',
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
                title: 'Норские резиденции, Романовская, 1, 3, камера 3',
                coordinates: [57.724824, 39.753407],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3603/view?group=26288979',
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
                title: 'Норские резиденции, Романовская, 1, 3, камера 4',
                coordinates: [57.724824, 39.753407],
                description: '',
                url: 'https://vs.domru.ru/account/camera/3599/view?group=26288979',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'NorskieResidencii',
                        password: 'Norsk2022'
                    }
                }
            },
            
            // Продолжаем добавлять камеры
            {
                title: 'Норские резиденции, Мологская, 4, 2, камера 1',
                coordinates: [57.725170, 39.755509],
                description: '',
                url: 'https://vs.domru.ru/account/camera/1553493/view?group=26288981',
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
                title: 'Норские резиденции, Мологская, 4, 2, камера 2',
                coordinates: [57.725170, 39.755509],
                description: '',
                url: 'https://vs.domru.ru/account/camera/1553507/view.html?backPage=1',
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
                title: 'Норские резиденции, Мологская, 4, 2, камера 3',
                coordinates: [57.725170, 39.755509],
                description: '',
                url: 'https://vs.domru.ru/account/camera/1553511/view.html?backPage=1',
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
                title: 'Норские резиденции, Мологская, 4, 2, камера 4',
                coordinates: [57.725170, 39.755509],
                description: '',
                url: 'https://vs.domru.ru/account/camera/1553519/view.html?backPage=1',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                access: {
                    type: 'basic_auth',
                    credentials: {
                        login: 'NorskieResidencii',
                        password: 'Norsk2022'
                    }
                }
            },
            
            // Продолжаем добавлять камеры
            {
                title: 'Норские резиденции, ул. Додонова, 2, камера 1',
                coordinates: [57.726203, 39.757386],
                description: '',
                url: 'https://vs.domru.ru/account/camera/251707/view.html?backPage=1',
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
                title: 'Норские резиденции, ул. Додонова, 2, камера 2',
                coordinates: [57.726203, 39.757386],
                description: '',
                url: 'https://vs.domru.ru/account/camera/251711/view.html?backPage=1',
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
                title: 'Норские резиденции, ул. Додонова, 2, камера 3',
                coordinates: [57.726203, 39.757386],
                description: '',
                url: 'https://vs.domru.ru/account/camera/251715/view.html?backPage=1',
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
                title: 'Норские резиденции, ул. Додонова, 2, камера 4',
                coordinates: [57.726203, 39.757386],
                description: '',
                url: 'https://vs.domru.ru/account/camera/251719/view.html?backPage=1',
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
                title: 'Норские резиденции, ул. Додонова, 2, камера 5',
                coordinates: [57.726203, 39.757386],
                description: '',
                url: 'https://vs.domru.ru/account/camera/16065041/view?group=26289009',
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
                title: 'Норские резиденции, ул. Додонова, 2, камера 6',
                coordinates: [57.726203, 39.757386],
                description: '',
                url: 'https://vs.domru.ru/account/camera/16065073/view.html?backPage=1',
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
                title: 'Норские резиденции, ул. Додонова, 2, камера 7',
                coordinates: [57.726203, 39.757386],
                description: '',
                url: 'https://vs.domru.ru/account/camera/16065145/view.html?backPage=1',
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
                title: 'Норские резиденции, ул. Додонова, 2, камера 8',
                coordinates: [57.726203, 39.757386],
                description: '',
                url: 'https://vs.domru.ru/account/camera/16065205/view.html?backPage=1',
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
                title: 'Норские резиденции, ул. Додонова, 4, камера 1',
                coordinates: [57.726361, 39.758976],
                description: '',
                url: 'https://vs.domru.ru/account/camera/251719/view?group=26288985',
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
                title: 'Норские резиденции, ул. Додонова, 4, камера 2',
                coordinates: [57.726361, 39.758976],
                description: '',
                url: 'https://vs.domru.ru/account/camera/19604761/view?group=26288985',
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
                title: 'Норские резиденции, ул. Додонова, 4, камера 3',
                coordinates: [57.726361, 39.758976],
                description: '',
                url: 'https://vs.domru.ru/account/camera/19604805/view?group=26288985',
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
                title: 'Норские резиденции, ул. Додонова, 4, камера 4',
                coordinates: [57.726361, 39.758976],
                description: '',
                url: 'https://vs.domru.ru/account/camera/19604769/view?group=26288985',
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
                title: 'Норские резиденции, ул. Додонова, 4, камера 5',
                coordinates: [57.726361, 39.758976],
                description: '',
                url: 'https://vs.domru.ru/account/camera/19604789/view?group=26288985',
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
                title: 'Норские резиденции, ул. Додонова, 4, камера 6',
                coordinates: [57.726361, 39.758976],
                description: '',
                url: 'https://vs.domru.ru/account/camera/54406943/view.html?backPage=1',
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
                title: 'Норские резиденции, ул. Додонова, 4, камера 7',
                coordinates: [57.726361, 39.758976],
                description: '',
                url: 'https://vs.domru.ru/account/camera/54406951/view.html?backPage=1',
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
                title: 'Норские резиденции, ул. Додонова, 4, камера 8',
                coordinates: [57.726361, 39.758976],
                description: '',
                url: 'https://vs.domru.ru/account/camera/54406955/view.html?backPage=1',
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
                title: 'Норские резиденции, ул. Додонова, 4, камера 9',
                coordinates: [57.726361, 39.758976],
                description: '',
                url: 'https://vs.domru.ru/account/camera/54406959/view.html?backPage=1',
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
                title: 'Норские резиденции, ул. Додонова, 6, камера 1',
                coordinates: [57.726525, 39.760450],
                description: '',
                url: 'https://vs.domru.ru/account/camera/30255927/view.html?backPage=1',
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
                title: 'Норские резиденции, ул. Додонова, 6, камера 2',
                coordinates: [57.726525, 39.760450],
                description: '',
                url: 'https://vs.domru.ru/account/camera/30255999/view.html?backPage=1',
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
                title: 'Норские резиденции, ул. Додонова, 6, камера 3',
                coordinates: [57.726525, 39.760450],
                description: '',
                url: 'https://vs.domru.ru/account/camera/30256055/view.html?backPage=1',
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
                title: 'Норские резиденции, ул. Додонова, 6, камера 4',
                coordinates: [57.726525, 39.760450],
                description: '',
                url: 'https://vs.domru.ru/account/camera/30256071/view.html?backPage=1',
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
                title: 'ул.Кирова/Чапаева',
                coordinates: [57.305598, 39.858084],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Летяга',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@Letyaga76'
                        },
                        {
                            type: 'phone',
                            value: '89066334550'
                        }
                    ]
                }
            },
            {
                title: 'ул.Кирова/Менжинского',
                coordinates: [57.305905, 39.860981],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Летяга',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@Letyaga76'
                        },
                        {
                            type: 'phone',
                            value: '89066334550'
                        }
                    ]
                }
            },
            {
                title: 'ул.Менжинского/Седова',
                coordinates: [57.299680, 39.864563],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Летяга',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@Letyaga76'
                        },
                        {
                            type: 'phone',
                            value: '89066334550'
                        }
                    ]
                }
            },
            {
                title: 'ул.Советская/Кирова',
                coordinates: [57.304840, 39.853758],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Летяга',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@Letyaga76'
                        },
                        {
                            type: 'phone',
                            value: '89066334550'
                        }
                    ]
                }
            },
            {
                title: 'ул.Патова/Комарова',
                coordinates: [57.302216, 39.852488],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Летяга',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@Letyaga76'
                        },
                        {
                            type: 'phone',
                            value: '89066334550'
                        }
                    ]
                }
            },
            {
                title: 'ул.Строителей, 2',
                coordinates: [57.301168, 39.871799],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Летяга',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@Letyaga76'
                        },
                        {
                            type: 'phone',
                            value: '89066334550'
                        }
                    ]
                }
            },
            {
                title: 'Лидер',
                coordinates: [57.304116, 39.858738],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Летяга',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@Letyaga76'
                        },
                        {
                            type: 'phone',
                            value: '89066334550'
                        }
                    ]
                }
            },
            {
                title: 'ул.Кирова',
                coordinates: [57.307128, 39.867881],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Летяга',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@Letyaga76'
                        },
                        {
                            type: 'phone',
                            value: '89066334550'
                        }
                    ]
                }
            },
            {
                title: 'ул.Кирова/Северная',
                coordinates: [57.307128, 39.867881],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Летяга',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@Letyaga76'
                        },
                        {
                            type: 'phone',
                            value: '89066334550'
                        }
                    ]
                }
            },
            {
                title: 'ул.Калинина/Чапаева',
                coordinates: [57.303621, 39.859065],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Летяга',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@Letyaga76'
                        },
                        {
                            type: 'phone',
                            value: '89066334550'
                        }
                    ]
                }
            },
            {
                title: 'Школьный пр-д',
                coordinates: [57.303621, 39.859065],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Летяга',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@Letyaga76'
                        },
                        {
                            type: 'phone',
                            value: '89066334550'
                        }
                    ]
                }
            },
            {
                title: 'Минирынок, Клубная',
                coordinates: [57.606936, 39.949544],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Машиностроителей пр-т, 60 (2 камеры)',
                coordinates: [57.638277, 39.963002],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Авиаторов - Яковлевская (8 камер)',
                coordinates: [57.658410, 39.957952],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Машиностроителей пр., - Орджоникидзе',
                coordinates: [57.650351, 39.948896],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Машиностроителей пр-т, 15',
                coordinates: [57.647866, 39.953255],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Машиностроителей, Аврора остановка',
                coordinates: [57.651259, 39.948047],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Машиностроителей, дом 7',
                coordinates: [57.652184, 39.947205],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'С.Орджоникидзе - Космонавтов',
                coordinates: [57.653028, 39.960787],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Авиаторов пр-т - Машиностроителей пр-т',
                coordinates: [57.653028, 39.960787],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Авиаторов пр-т, 133',
                coordinates: [57.653028, 39.960787],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Красноборская -С.Орджоникидзе',
                coordinates: [57.653028, 39.960787],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'ул. Дачная - ул. Урочская',
                coordinates: [57.653028, 39.960787],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Луговая, 10',
                coordinates: [57.653028, 39.960787],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Спартаковская ул',
                coordinates: [57.725652, 39.818540],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Ленина пр-т, Республиканская',
                coordinates: [57.642933, 39.882723],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Полушкина роща',
                coordinates: [57.725652, 39.818540],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Юбилейный мост',
                coordinates: [57.671856, 39.848899],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Ленинградский пр., - ул. Е. Колесовой',
                coordinates: [57.678450, 39.798141],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Ленинградский пр-т, 49а',
                coordinates: [57.679642, 39.791774],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Тутаевское-Урицкого',
                coordinates: [57.689355, 39.809396],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Ленинградский пр-т - Дзержинского пр-т',
                coordinates: [57.686200, 39.784318],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Парк 30-летия Победы (несколько камер)',
                coordinates: [57.686893, 39.780816],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'ул. Труфанова - пр-т. Дзержинского',
                coordinates: [57.680250, 39.779324],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'ул. Труфанова - пр-т. Дзержинского',
                coordinates: [57.680250, 39.779324],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Труфанова-Панина',
                coordinates: [57.684477, 39.769370],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Панина - Строителей',
                coordinates: [57.696221, 39.782282],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Ленинградский пр-т - ул. Панина',
                coordinates: [57.689218, 39.778411],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Ленинградский-Волгоградская',
                coordinates: [57.695945, 39.767295],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Ленинградский пр-т, - ул. Бабича',
                coordinates: [57.698067, 39.764384],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Ленинградский пр-т, 86',
                coordinates: [57.703479, 39.760201],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Ленинградский пр-т, 88',
                coordinates: [57.705442, 39.760060],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Большая Норская ул. - 1905 года ул',
                coordinates: [57.713876, 39.773589],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Ивановский перевоз пос, 5',
                coordinates: [57.633336, 39.747466],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Магистральная - Березовая',
                coordinates: [57.641037, 39.782191],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Магистральная/Лодочная',
                coordinates: [57.634253, 39.801502],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Ивняки Светлая, 5',
                coordinates: [57.615459, 39.790006],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Ивняки Светлая, 8',
                coordinates: [57.614302, 39.791283],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Чкалова ул. - Добрынина ул',
                coordinates: [57.637940, 39.823164],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Леонтьевское кладбище (несколько камер)',
                coordinates: [57.630317, 39.832800],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Привокзальная площадь (несколько камер)',
                coordinates: [57.626307, 39.836386],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Белинского-Чкалова',
                coordinates: [57.637732, 39.839618],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'К.Либкнехта, 11',
                coordinates: [57.640459, 39.843199],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Пр. Октября - ул. Чкалова',
                coordinates: [57.637535, 39.858572],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Чехова/Кудрявцева',
                coordinates: [57.633642, 39.844590],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Б.Октябрьская - Лисицына',
                coordinates: [57.620604, 39.853439],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Б.Октябрьская - пр. Толбухина',
                coordinates: [57.620954, 39.858471],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Б.Октябрьская, - Городской Вал',
                coordinates: [57.620667, 39.848447],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Парк Мира',
                coordinates: [57.627732, 39.846947],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Площадь Мира',
                coordinates: [57.629036, 39.848341],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Свободы, 62',
                coordinates: [57.627205, 39.849131],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Свободы, 78',
                coordinates: [57.626472, 39.837777],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'ул. Свободы - ул. Горвал',
                coordinates: [57.626950, 39.848788],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'ул. Чехова - ул. Угличская',
                coordinates: [57.630626, 39.841212],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Гудованцева, ост',
                coordinates: [57.607218, 39.813398],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Рабочий сад',
                coordinates: [57.610061, 39.823879],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Стачек, 53',
                coordinates: [57.608762, 39.834614],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Лисицына - Мышкинский пр-д',
                coordinates: [57.618516, 39.853450],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Мост через Которосль',
                coordinates: [57.620040, 39.886515],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'ул. Магистральная - Мышкинский пр-зд',
                coordinates: [57.615840, 39.841077],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Большая Федоровская, 73',
                coordinates: [57.608986, 39.865234],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Московский пр. - Малая Пролетарская',
                coordinates: [57.612436, 39.882802],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Московский пр., - Наумова',
                coordinates: [57.608825, 39.871252],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Волжская наб. Стрелка (много камер)',
                coordinates: [57.620483, 39.903941],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Тверицкая набережная, д. 77, Храм Софии Премудрости Божией',
                coordinates: [57.623428, 39.919159],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Тверицкая наб., 71',
                coordinates: [57.624611, 39.917801],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Московский пр-т - пр-т Фрунзе',
                coordinates: [57.598777, 39.872917],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Московский пр-кт. вкусно и точка',
                coordinates: [57.584801, 39.855278],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Московский пр-т - Нагорная',
                coordinates: [57.605297, 39.878377],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Московский пр-т-Суздальское шоссе',
                coordinates: [57.601354, 39.877245],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Суздальское ш. - пр-т. Фрунзе',
                coordinates: [57.598819, 39.877996],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: '1-я Приволжская, 10',
                coordinates: [57.597966, 39.882679],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Фрунзе пр-т - Чернопрудная ул',
                coordinates: [57.587576, 39.904346],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Фрунзе пр-т - ул. А. Колмогорова',
                coordinates: [57.583881, 39.907921],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Фрунзе, 57, Остановка Судостроителей',
                coordinates: [57.573556, 39.920809],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Фрунзе пр-т - Лескова',
                coordinates: [57.580577, 39.912339],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Светлая - Фрунзе',
                coordinates: [57.566932, 39.927819],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Фрунзе, 71',
                coordinates: [57.567162, 39.929058],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Б. Полянки - Окружная дорога',
                coordinates: [57.585382, 39.821905],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Гагарина/Нефтяников',
                coordinates: [57.580606, 39.834812],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Гагарина-Рыкачева',
                coordinates: [57.581608, 39.836284],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Гагарина - ЮЗ окружная дорога',
                coordinates: [57.579868, 39.833515],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Доронина ул., Суздальская ярмарка',
                coordinates: [57.574872, 39.864635],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Калинина - Ньютона',
                coordinates: [57.570832, 39.858427],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Калинина, возле магазина Перекресток',
                coordinates: [57.570964, 39.859610],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Калинина/Ивановская',
                coordinates: [57.569976, 39.861164],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Гагарина/Менделеева',
                coordinates: [57.583552, 39.838955],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Калинина, 11',
                coordinates: [57.574436, 39.849428],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Московский - РИО. Вход, парковка',
                coordinates: [57.576281, 39.842853],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Павлова - Московский',
                coordinates: [57.581504, 39.852054],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Павлова, парк',
                coordinates: [57.583870, 39.849027],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'ул. Гагарина - ул. Институтская, Гагарина, 12 (Медсанчасть НПЗ)',
                coordinates: [57.589055, 39.846466],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Московский, 153А',
                coordinates: [57.585032, 39.856632],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Павлова-Зелинского',
                coordinates: [57.584498, 39.844253],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Россети(Медведь)',
                coordinates: [57.585198, 39.855681],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Московский пр., остановка Автовокзал',
                coordinates: [57.592625, 39.863042],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Московский пр., - Силикатное ш.',
                coordinates: [57.592947, 39.863416],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'ТРК Фараон, Гоголя, 1',
                coordinates: [57.592469, 39.866081],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Гоголя - Суздальское',
                coordinates: [57.592494, 39.877817],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Московский пр-т, 137',
                coordinates: [57.592105, 39.863486],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Московский-Гагарина',
                coordinates: [57.589973, 39.860114],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Ньютона, 18',
                coordinates: [57.585192, 39.864888],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Успенская площадь',
                coordinates: [57.526442, 38.318734],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Ленина/Спасская',
                coordinates: [57.526448, 38.315145],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            },
            {
                title: 'Ростовская, 4, Ростовская/Свободы',
                coordinates: [56.738904, 38.856064],
                description: '',
                url: '',
                ownerId: new ObjectId('6733a6ec19b16b45427fc3f4'),
                ownerContact: {
                    name: 'Рим (Центрспас)',
                    accounts: [
                        {
                            type: 'telegram',
                            value: '@RimMiller'
                        }
                    ]
                }
            }
        ]

        await db.collection('cameraLocations').insertMany(cameras.map(cam => {
            const { coordinates, ...rest } = cam
            return {
                ...rest,
                location: {
                    type: 'Point',
                    coordinates: [coordinates[1], coordinates[0]]
                }
            }
        }))
    },

    async down(db, client) {
        await db.collection('cameraLocations').drop()
    }
}
