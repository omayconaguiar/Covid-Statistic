import { makeDbAddStatistic, makeAddStatisticValidation, makeLogControllerDecorator } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { AddStatisticController } from '@/presentation/controllers'

export const makeAddStatisticController = (): Controller => {
  const controller = new AddStatisticController(makeDbAddStatistic(), makeAddStatisticValidation())
  return makeLogControllerDecorator(controller)
}
