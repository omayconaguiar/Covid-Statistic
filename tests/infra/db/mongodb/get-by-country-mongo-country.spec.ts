import { GetByCountryMongoRepository, MongoHelper } from '@/infra/db'
import { mockGetByCountryParams } from '@/tests/domain/mocks'

import { Collection } from 'mongodb'

const makeSut = (): GetByCountryMongoRepository => {
  return new GetByCountryMongoRepository()
}

let syncCollection: Collection

describe('GetByCountryMongoRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    syncCollection = await MongoHelper.getCollection('sync')
    await syncCollection.deleteMany({})
  })

  describe('getByCountry()', () => {
    test('Should getByCountry in sync with success', async () => {
      const res = await syncCollection.insertOne(mockGetByCountryParams())
      const sut = makeSut()
      const getByCountry: any = await sut.getbyCountry(res.ops[0]._id)
      expect(getByCountry).toBeTruthy()
      expect(getByCountry.id).toBeTruthy()
    })
  })
})
