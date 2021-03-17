import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { AddStatistic } from '@/domain/usecases'
import { serverError, noContent, badRequest } from '@/presentation/helpers'

export class AddStatisticController implements Controller {
  constructor (
    private readonly addStatistic: AddStatistic,
    private readonly validation: Validation
  ) {}

  async handle (request: AddStatisticController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }

      await this.addStatistic.addStatistic({
        ...request
      })

      return noContent()
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}

export namespace AddStatisticController {
  export type Request = {
    id: string
    cases: {
      new: number
      active: number
      critical: number
      recovered: number
      total: number
    }
    deaths: {
      new: number
      total: number
    }
    tests: {
      total: number
    }
  }
}
