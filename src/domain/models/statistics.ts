export type SyncStaticModel = {
  covidLength?: any
  covidData?: any
  continent: string
  country: string
  population: number
  cases: {
    new?: any
    active: number
    critical: number
    recovered: number
    total: number
  }
  deaths: {
    new?: any
    total?: any
  }
  tests: {
    total: number
  }
  day: string
  time: string
}

export type GetAllModel = {
  limit?: number
  offset?: number
}

export type GetByCountryModel = {
  id: string
}
