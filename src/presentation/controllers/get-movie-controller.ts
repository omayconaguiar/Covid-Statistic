import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok } from '@/presentation/helpers'
import { GetMovie } from '@/domain/usecases'

export class GetMovieController implements Controller {
  constructor (
    private readonly getMovie: GetMovie
  ) {}

  async handle (data: GetMovieController.Request): Promise<HttpResponse> {
    try {
      const response = await this.getMovie.getMovie(data)

      return ok(response)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace GetMovieController {
  export type Request = {
    movie: string
    type: string
    rate: number
  }
}
