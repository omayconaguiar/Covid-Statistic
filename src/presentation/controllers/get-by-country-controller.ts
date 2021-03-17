import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { GetByCountry } from '@/domain/usecases'
import { serverError, ok, badRequest } from '@/presentation/helpers'

export class GetByCountryController implements Controller {
  constructor (
    private readonly getByCountry: GetByCountry,
    private readonly validation: Validation
  ) {}

  async handle (request: GetByCountryController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }

      var response = await this.getByCountry.getByCountry({
        ...request
      })

      return ok(response)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}

export namespace GetByCountryController {
  export type Request = {
    id: string
  }
}
