import { makeMovieValidation, makeLogControllerDecorator, makeDbAddMovie } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { MovieController } from '@/presentation/controllers'

export const makeMovieController = (): Controller => {
  const controller = new MovieController(makeDbAddMovie(), makeMovieValidation())
  return makeLogControllerDecorator(controller)
}
