import app from '@/main/config/app'
import env from '@/main/config/env'
import { MongoHelper } from '@/infra/db'

import { sign } from 'jsonwebtoken'
import { Collection } from 'mongodb'
import request from 'supertest'

let syncCollection: Collection
let accountCollection: Collection

const mockAccessToken = async (): Promise<string> => {
  const res = await accountCollection.insertOne({
    name: 'Rodrigo',
    email: 'rodrigo.manguinho@gmail.com',
    role: 'admin'
  })
  const id = res.ops[0]._id
  const accessToken = sign({ id }, env.jwtSecret)
  await accountCollection.updateOne({
    _id: id
  }, {
    $set: {
      accessToken
    }
  })
  return accessToken
}

describe('GetAll Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    syncCollection = await MongoHelper.getCollection('sync')
    await syncCollection.deleteMany({})
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('GET /statistics', () => {
    test('Should return 403 on getAll without accessToken', async () => {
      await request(app)
        .get('/api/statistics')
        .send()
        .expect(403)
    })

    test('Should return 200 on save getAll with accessToken', async () => {
      const accessToken = await mockAccessToken()
      await request(app)
        .get('/api/statistics')
        .set('x-access-token', accessToken)
        .send()
        .expect(200)
    })
  })
})
