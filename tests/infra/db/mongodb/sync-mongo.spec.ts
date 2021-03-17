import { SyncMongoRepository, MongoHelper } from '@/infra/db'
import { mockSyncStatisticParams } from '@/tests/domain/mocks'

import { Collection } from 'mongodb'

const makeSut = (): SyncMongoRepository => {
  return new SyncMongoRepository()
}

let syncCollection: Collection

describe('SyncMongoRepository', () => {
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

  describe('sync()', () => {
    test('Should sync with success', async () => {
      const sut = makeSut()
      const sync = mockSyncStatisticParams()
      const isValid: any = await sut.getSync(sync)
      expect(isValid).toBe(undefined)
    })
  })
})
