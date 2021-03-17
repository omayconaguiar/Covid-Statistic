import { GetAlls, MongoHelper } from '@/infra/db'
import { mockGetallParams } from '@/tests/domain/mocks'

import { Collection } from 'mongodb'

const makeSut = (): GetAlls => {
  return new GetAlls()
}

let syncCollection: Collection

describe('GetAlls', () => {
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

  describe('getAll()', () => {
    test('Should getAll in sync with success', async () => {
      const res = await syncCollection.insertOne(mockGetallParams())
      const sut = makeSut()
      const getAll: any = await sut.getAll(res.ops[0]._id)
      expect(getAll).toBeTruthy()
    })
  })
})
