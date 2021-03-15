export interface SyncStatic {
    getSync: (data:SyncStatic.Params) => Promise<void>
}
  
export interface GetByCountry {
  getByCountry: (data:GetByCountry.Params) => Promise<GetByCountry.Result>
}

export interface GetAll {
  getAll: (data:GetAll.Params) => Promise<GetAll.Result>
}

export interface AddStatistic {
  addStatistic: (data:AddStatistic.Params)=> Promise<void>
}

export namespace GetAll {
  export type Params = {
    limit?: number
    offset?: number
    continent?: string
  }
  export type Result = SyncStatic
}

export namespace GetByCountry {
  export type Params = {
    id: string
  }
  export type Result = SyncStatic
}

export namespace AddStatistic {
  export type Params = Pick<SyncStatic.Params, "deaths" | "tests" | "cases">
   & Pick<GetByCountry.Params, "id">  
}

export namespace SyncStatic {
  export type Params = {
   covidLength?: any,
    covidData?:any,
    continent: string,
    country: string,
    population: number,
    cases: {
      new?: any,
      active: number,
      critical: number,
      recovered: number,
      total: number
    },
    deaths: {
      new?: any,
      total?: any
    },
    tests: {
      total: number
    },
    day: string,
    time: string
  }
}

