const supertest = require('supertest')
const { server } = require('../server')
const { sequelize } = require('../models/index')
const request = supertest(server)

let token = 'Basic dGVzdFVzZXI6dGVzdFBhc3N3b3Jk'

beforeAll(async() => {
    await sequelize.sync()
})

afterAll(async() => {
    await sequelize.drop()
    await sequelize.close()
})

describe('Sign In route test', () => {
    it('Should return logged in user', async() => {
        const body = {
            username: 'testUser',
            password: 'testPassword'
        }
        const response = await request.post('/signup').send(body)
        const loginResponse = await request.post('/signin').set({'Authorization': 'Basic ' + token}).send(response.body)

        expect(loginResponse.status).toEqual(200)
        expect(loginResponse.body.user.username).toEqual('testUser')
    })
})