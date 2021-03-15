import { SyncStatic, GetByCountry, GetAll, AddStatistic } from '@/domain/usecases'

export interface SyncStatisticRepository {
  getSync: (data: SyncStatisticRepository.Params) => Promise<void>
}

export interface GetbyCountryRepository {
  getbyCountry: (data:GetByCountry.Params) => Promise<GetByCountry.Result>
}

export interface GetAllRepository {
  getAll:(data:GetAll.Params) => Promise<GetAll.Result>
}

export interface AddStatisticRepository {
  addStatistic: (data:AddStatistic.Params) => Promise<void>
}

export namespace SyncStatisticRepository {
  export type Params = SyncStatic.Params;
}

export namespace GetbyCountryRepository {
  export type Params = GetByCountry.Params;
  export type Result = GetByCountry.Result;
}

export namespace GetAllRepository {
  export type Params = GetAll.Params;
  export type Result = GetAll.Result;
}

export namespace AddStatisticRepository {
  export type Params = AddStatistic.Params;
}
