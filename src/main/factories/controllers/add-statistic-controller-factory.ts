import { makeDbAddStatistic, makeAddStatisticValidation, makeLogControllerDecorator } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { AddStatisticControllers } from '@/presentation/controllers'

export const makeAddStatisticController = (): Controller => {
  const controller = new AddStatisticControllers(makeDbAddStatistic(), makeAddStatisticValidation())
  return makeLogControllerDecorator(controller)
}
