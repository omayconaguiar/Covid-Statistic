import { Controller, HttpResponse, Validation, HttpRequest } from '@/presentation/protocols'
import { GetByCountry } from '@/domain/usecases'
import { serverError, ok, badRequest } from '@/presentation/helpers'

export class GetByCountryController implements Controller {
  constructor (    
    private readonly getByCountry: GetByCountry,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {    
      const error = this.validation.validate(httpRequest.params);
      if (error) {
        return badRequest(error)
      }

      const { id } = httpRequest.params

      var response = await this.getByCountry.getByCountry({
        id
      })      
      
      return ok(response)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
