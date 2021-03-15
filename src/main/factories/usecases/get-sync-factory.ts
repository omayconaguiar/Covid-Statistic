import { SyncStatic } from '@/domain/usecases/statistics'
import { SyncMongoRepository } from '@/infra/db/mongodb/sync-mongo-repository'
import { DbGetSyncStatistics } from '@/data/usecases/sync'

export const makeDbGetSyncStatistics = (): SyncStatic => {
  const surveyMongoRepository = new SyncMongoRepository()
  return new DbGetSyncStatistics(surveyMongoRepository)
}
