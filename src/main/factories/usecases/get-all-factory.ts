import { GetAll } from '@/domain/usecases'
import { GetAlls } from '@/infra/db/mongodb'
import { DbgetAll } from '@/data/usecases'

export const makeDbGetAll = (): GetAll => {
  const GetAllMongoRepository = new GetAlls()
  return new DbgetAll(GetAllMongoRepository)
}
