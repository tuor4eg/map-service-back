const bcrypt = require('bcrypt')

module.exports = {
  async up(db, client) {
    const users = [
      { name: 'Admin', email: 'admin@test.ru', password: '123', role: 'admin' },
      { name: 'User', email: 'user@test.ru', password: '456', role: 'user' }
    ]

    for (let user of users) {
      user.password = await bcrypt.hash(user.password, 10)
    }

    await db.collection('users').insertMany(users)
  },

  async down(db, client) {
    await db.collection('users').deleteMany({
      email: { $in: ['admin@test.ru', 'user@test.ru'] }
    })
  }
}
