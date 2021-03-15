import { SyncStaticModel } from '@/domain/models'

import faker from 'faker'

export const mockGetall = (): SyncStaticModel => ({
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
      total: faker.random.number(),
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

