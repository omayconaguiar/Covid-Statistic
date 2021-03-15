import { makeDbGetSyncStatistics, makeLogControllerDecorator } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { SyncStatisticsController } from '@/presentation/controllers'

export const makeGetSyncStatisticController = (): Controller => {
  const controller = new SyncStatisticsController(makeDbGetSyncStatistics())
  return makeLogControllerDecorator(controller)
}
