import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import request from 'supertest'
import app from '../config/app'
import { Collection } from 'mongodb'
import { hash } from 'bcrypt'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should returns 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Andre',
          email: 'deh.hgl@gmail.com',
          password: '12345',
          passwordConfirmation: '12345'
        })
        .expect(200)
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Andre',
          email: 'deh.hgl@gmail.com',
          password: '12345',
          passwordConfirmation: '12345'
        })
        .expect(403)
    })
  })

  describe('POST /login', () => {
    test('Should returns 200 on login', async () => {
      const password = await hash('12345', 12)
      await accountCollection.insertOne({
        name: 'Andre',
        email: 'deh.hgl@gmail.com',
        password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'deh.hgl@gmail.com',
          password: '12345'
        })
        .expect(200)
    })

    test('Should returns 401 on login', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'deh.hgl@gmail.com',
          password: '12345'
        })
        .expect(401)
    })
  })
})
