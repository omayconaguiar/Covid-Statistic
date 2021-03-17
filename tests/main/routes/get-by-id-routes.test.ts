import app from '@/main/config/app'
import env from '@/main/config/env'
import { MongoHelper } from '@/infra/db'
import FakeObjectId from 'bson-objectid'
import faker from 'faker'
import { sign } from 'jsonwebtoken'
import { Collection } from 'mongodb'
import request from 'supertest'

let syncCollection: Collection
let accountCollection: Collection

const mockPayload = async (): Promise<any> => {
  return {
    id: '604d0068bb4d3942480cc023'
  }
}

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

describe('GetById Routes', () => {
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

  describe('GET /statistics/:id', () => {
    test('Should return 403 on getById without accessToken', async () => {
      await request(app)
        .get('/api/statistics/604d0069bb4d3942480cc024')
        .send()
        .expect(403)
    })

    test('Should return 200 on save getById with accessToken', async () => {
      const accessToken = await mockAccessToken()
      const res = await syncCollection.insertOne({
        id: FakeObjectId.generate(),
        cases: {
          new: faker.random.number(),
          active: faker.random.number(),
          critical: faker.random.number(),
          recovered: faker.random.number(),
          total: faker.random.number()
        },
        deaths: {
          new: faker.random.number(),
          total: faker.random.number()
        },
        tests: {
          total: faker.random.number()
        }
      })
      await request(app)
        .get(`/api/statistics/${res.ops[0]._id}`)
        .set('x-access-token', accessToken)
        .send({
          mockPayload
        })
        .expect(200)
    })
  })
})
