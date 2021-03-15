import { Controller, HttpResponse, Validation, HttpRequest } from '@/presentation/protocols'
import { AddStatistic } from '@/domain/usecases'
import { serverError, noContent, badRequest } from '@/presentation/helpers'

export class AddStatisticControllers implements Controller {
  constructor (    
    private readonly addStatistic: AddStatistic,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {   
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { deaths, tests, cases } = httpRequest.body
      const { id } = httpRequest.params

      await this.addStatistic.addStatistic({
        deaths, tests, cases,id
      })   
      
      return noContent()
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
