import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, noContent } from '@/presentation/helpers'
import { DeleteMovie } from '@/domain/usecases'

export class DeleteMovieController implements Controller {
  constructor (
    private readonly deleteMovie: DeleteMovie
  ) {}

  async handle (request: DeleteMovieController.Request): Promise<HttpResponse> {
    try {
      await this.deleteMovie.deleteMovie({
        ...request
      })

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace DeleteMovieController {
  export type Request = {
    id: string
  }
}
