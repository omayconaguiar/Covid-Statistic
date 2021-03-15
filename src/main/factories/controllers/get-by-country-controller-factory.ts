import { makeDbGetByCountry, makeGetByIdValidation,makeLogControllerDecorator } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { GetByCountryController } from '@/presentation/controllers'

export const makeGetByCountryController = (): Controller => {
  const controller = new GetByCountryController(makeDbGetByCountry(), makeGetByIdValidation())
  return makeLogControllerDecorator(controller)
}
