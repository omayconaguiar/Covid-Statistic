import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, serverError, noContent } from '@/presentation/helpers'
import { AddMovie } from '@/domain/usecases'

export class MovieController implements Controller {
  constructor (
    private readonly addmovie: AddMovie,
    private readonly validation: Validation
  ) {}

  async handle (request: MovieController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }

      await this.addmovie.addMovie({
        ...request
      })

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace MovieController {
  export type Request = {
    movie: string
    type: string
    rate: number
  }
}
