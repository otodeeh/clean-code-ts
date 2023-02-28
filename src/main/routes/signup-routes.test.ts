import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('account')
    await accountCollection.deleteMany({})
  })

  test('Should returns an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Andre',
        email: 'deh.hgl@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
