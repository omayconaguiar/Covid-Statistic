import { makeDbGetAll, makeLogControllerDecorator } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { getAllControllers } from '@/presentation/controllers'

export const makeGetAllController = (): Controller => {
  const controller = new getAllControllers(makeDbGetAll())
  return makeLogControllerDecorator(controller)
}
