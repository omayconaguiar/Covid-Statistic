import { AddStatistic, GetAll, GetByCountry, SyncStatic } from '@/domain/usecases'
import FakeObjectId from 'bson-objectid'

import faker from 'faker'

export const mockAddStatisticParams = (): AddStatistic.Params => ({
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

export const mockGetallParams = (): GetAll.Params => ({
  limit: faker.random.number(),
  offset: faker.random.number()
})

export const mockGetByCountryParams = (): GetByCountry.Params => ({
  id: '604d0068bb4d3942480cc023'
})

export const mockSyncStatisticParams = (): SyncStatic.Result => ({
  covidLength: faker.random.number(),
  covidData: faker.random.number(),
  continent: faker.random.word(),
  country: faker.random.word(),
  population: faker.random.number(),
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
  },
  day: faker.random.word(),
  time: faker.random.word()
})
