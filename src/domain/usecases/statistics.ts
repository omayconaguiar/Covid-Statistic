import { SyncStaticModel, GetAllModel, GetByCountryModel } from '@/domain/models'

export interface SyncStatic {
  getSync: (data: SyncStatic.Result) => Promise<void>
}

export interface GetByCountry {
  getByCountry: (data: GetByCountry.Params) => Promise<GetByCountry.Result>
}

export interface GetAll {
  getAll: (data: GetAll.Params) => Promise<GetAll.Result>
}

export interface AddStatistic {
  addStatistic: (data: AddStatistic.Params) => Promise<void>
}

export namespace GetAll {
  export type Params = GetAllModel
  export type Result = SyncStatic
}

export namespace GetByCountry {
  export type Params = GetByCountryModel
  export type Result = SyncStatic
}

export namespace AddStatistic {
  export type Params = Pick<SyncStatic.Result, 'deaths' | 'tests' | 'cases'>
  & Pick<GetByCountry.Params, 'id'>
}

export namespace SyncStatic {
  export type Result = SyncStaticModel
}
