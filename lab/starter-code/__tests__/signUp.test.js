const supertest = require('supertest')
const { server } = require('../server')
const { sequelize } = require('../models/index')
const request = supertest(server)

beforeAll(async() => {
    await sequelize.sync();
})

afterAll(async() => {
    await sequelize.drop()
    await sequelize.close()
})


describe('Sign Up Route tests', () => {

    it('Should create user', async() => {
        const body = {
            username: 'testUser',
            password: 'testPassword'
        }
        const response = await request.post('/signup').send(body)
        expect(response.status).toEqual(201)
        expect(response.body.username).toEqual('testUser')
        expect(response.body.password).toBeTruthy()
        expect(response.body.password).not.toEqual('testPassword')

    })

})