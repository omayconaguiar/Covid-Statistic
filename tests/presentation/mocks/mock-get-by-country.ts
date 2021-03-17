import { GetByCountry } from '@/domain/usecases'

export class GetByCountrySpy implements GetByCountry {
  params: GetByCountry.Params
  result: GetByCountry.Result

  async getByCountry (params: GetByCountry.Params): Promise<GetByCountry.Result> {
    this.params = params
    return this.result
  }
}
