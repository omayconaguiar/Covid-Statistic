import { makeDbGetAll, makeLogControllerDecorator } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { GetAllController } from '@/presentation/controllers'

export const makeGetAllController = (): Controller => {
  const controller = new GetAllController(makeDbGetAll())
  return makeLogControllerDecorator(controller)
}
