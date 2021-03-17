import { GetAll } from '@/domain/usecases'

export class GetAllSpy implements GetAll {
  params: GetAll.Params
  result: GetAll.Result

  async getAll (params: GetAll.Params): Promise<GetAll.Result> {
    this.params = params
    return this.result
  }
}
