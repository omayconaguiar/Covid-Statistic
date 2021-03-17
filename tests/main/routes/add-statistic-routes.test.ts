import app from '@/main/config/app'
import env from '@/main/config/env'
import { MongoHelper } from '@/infra/db'
import FakeObjectId from 'bson-objectid'
import faker from 'faker'
import { sign } from 'jsonwebtoken'
import { Collection } from 'mongodb'
import request from 'supertest'

let accountCollection: Collection
let syncCollection: Collection

const mockPayload = async (): Promise<any> => {
  return {
    cases: {
      new: 1000,
      active: 1000,
      critical: 1000,
      recovered: 1000,
      total: 1000
    },
    deaths: {
      new: 1000,
      total: 1000
    },
    tests: {
      total: 1000
    }
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

describe('AddStatistic Routes', () => {
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

  describe('POST /statistics/:id', () => {
    test('Should return 403 on addStatistic without accessToken', async () => {
      await request(app)
        .post('/api/statistics/604d0069bb4d3942480cc024')
        .send({
          mockPayload
        })
        .expect(403)
    })

    test('Should return 204 on save addStatistic with accessToken', async () => {
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
        .post(`/api/statistics/${res.ops[0]._id}`)
        .set('x-access-token', accessToken)
        .send({
          cases: {
            new: 1000,
            active: 1000,
            critical: 1000,
            recovered: 1000,
            total: 1000
          },
          deaths: {
            new: 1000,
            total: 1000
          },
          tests: {
            total: 1000
          }
        })
        .expect(204)
    })
  })
})
