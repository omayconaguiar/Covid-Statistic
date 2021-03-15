import { GetByCountry } from '@/domain/usecases'
import { GetbyCountryRepository } from '@/data/protocols'

export class DbGetByCountry implements GetByCountry {
  constructor (private readonly getbyCountryRepository: GetbyCountryRepository) {}

  async getByCountry (data: GetByCountry.Params): Promise<GetByCountry.Result> {
    return await this.getbyCountryRepository.getbyCountry(data)
  }
}
