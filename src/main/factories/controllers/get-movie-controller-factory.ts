import { makeLogControllerDecorator, makeDbGetMovie } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { GetMovieController } from '@/presentation/controllers'

export const getMovieController = (): Controller => {
  const controller = new GetMovieController(makeDbGetMovie())
  return makeLogControllerDecorator(controller)
}
