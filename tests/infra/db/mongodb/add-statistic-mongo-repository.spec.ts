import { AddStatistics, MongoHelper } from '@/infra/db'
import { mockAddStatisticParams } from '@/tests/domain/mocks'

import { Collection } from 'mongodb'

const makeSut = (): AddStatistics => {
  return new AddStatistics()
}

let syncCollection: Collection

describe('AddStatistics', () => {
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

  describe('add()', () => {
    test('Should add a sync on success', async () => {
      const sut = makeSut()
      const addAccountParams = mockAddStatisticParams()
      const isValid: any = await sut.addStatistic(addAccountParams)
      expect(isValid.result.ok).toBe(1)
    })
  })
})
