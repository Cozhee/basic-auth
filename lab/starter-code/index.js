const { sequelize } = require('./models/index')
const server= require('./server')

async function startSequelize () {
    try {
        await sequelize.sync({force: true})
        console.log('Connection is a go!')
    } catch(err) {
        console.log(err)
    }
}

startSequelize()
server.start()