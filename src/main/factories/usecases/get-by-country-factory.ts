import { GetByCountry } from '@/domain/usecases'
import { GetByCountryMongoRepository } from '@/infra/db/mongodb'
import { DbGetByCountry } from '@/data/usecases'

export const makeDbGetByCountry = (): GetByCountry => {
  const getByCountryMongoRepository = new GetByCountryMongoRepository()
  return new DbGetByCountry(getByCountryMongoRepository)
}
