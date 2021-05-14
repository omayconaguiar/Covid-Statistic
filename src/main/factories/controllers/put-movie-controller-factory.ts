import { makeMovieValidation, makeLogControllerDecorator, putDbAddMovie } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { PutMovieController } from '@/presentation/controllers'

export const putMovieController = (): Controller => {
  const controller = new PutMovieController(putDbAddMovie(), makeMovieValidation())
  return makeLogControllerDecorator(controller)
}
