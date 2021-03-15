import { GetAll } from '@/domain/usecases'
import { GetAllRepository } from '@/data/protocols'

export class DbgetAll implements GetAll {
  constructor (private readonly getAllRepository: GetAllRepository) {}

  async getAll (data:GetAll.Params): Promise<GetAll.Result> {
    
    return await this.getAllRepository.getAll(data)
  }
}
