import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, serverError, noContent } from '@/presentation/helpers'
import { PutMovie } from '@/domain/usecases'

export class PutMovieController implements Controller {
  constructor (
    private readonly putMovie: PutMovie,
    private readonly validation: Validation
  ) {}

  async handle (request: PutMovieController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }

      await this.putMovie.putMovie({
        ...request
      })

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace PutMovieController {
  export type Request = {
    id: string
    movie: string
    type: string
    rate: number
  }
}
