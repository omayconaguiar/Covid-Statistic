import { Controller, HttpResponse } from '@/presentation/protocols'
import { GetAll } from '@/domain/usecases'
import { serverError, ok } from '@/presentation/helpers'

export class GetAllController implements Controller {
  constructor (
    private readonly getAll: GetAll
  ) {}

  async handle (request: GetAllController.Request): Promise<HttpResponse> {
    try {
      var response = await this.getAll.getAll({
        ...request
      })

      return ok(response)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}

export namespace GetAllController {
  export type Request = {
    limit: number
    offset: number
  }
}
