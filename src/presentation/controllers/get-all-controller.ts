import { Controller, HttpResponse, HttpRequest } from '@/presentation/protocols'
import { GetAll } from '@/domain/usecases'
import { serverError, ok } from '@/presentation/helpers'

export class GetAllControllers implements Controller {
  constructor (
    private readonly getAll: GetAll
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { limit, offset } = httpRequest.query

      var response = await this.getAll.getAll({
        limit: parseInt(limit),
        offset: parseInt(offset)
      })

      return ok(response)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
