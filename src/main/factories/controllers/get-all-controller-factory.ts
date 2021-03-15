import { makeDbGetAll, makeLogControllerDecorator } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { GetAllControllers } from '@/presentation/controllers'

export const makeGetAllController = (): Controller => {
  const controller = new GetAllControllers(makeDbGetAll())
  return makeLogControllerDecorator(controller)
}
