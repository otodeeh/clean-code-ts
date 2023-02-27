import request from 'supertest'
import app from '../config/app'

describe('Body parse Middleware', () => {
  test('Should parse body as json', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })

    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Andre' })
      .expect({ name: 'Andre' })
  })
})
