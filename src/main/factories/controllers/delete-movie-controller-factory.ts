import { makeLogControllerDecorator, deleteDbAddMovie } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { DeleteMovieController } from '@/presentation/controllers'

export const deleteMovieController = (): Controller => {
  const controller = new DeleteMovieController(deleteDbAddMovie())
  return makeLogControllerDecorator(controller)
}
