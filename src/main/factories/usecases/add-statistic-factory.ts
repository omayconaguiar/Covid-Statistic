import { AddStatistic } from '@/domain/usecases'
import { AddStatistics } from '@/infra/db/mongodb'
import { DbaddStatistic } from '@/data/usecases'

export const makeDbAddStatistic = (): AddStatistic => {
  const AddStatisticMongoRepository = new AddStatistics()
  return new DbaddStatistic(AddStatisticMongoRepository)
}
