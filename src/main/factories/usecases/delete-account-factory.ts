import { DeleteMovie } from '@/domain/usecases'
import { MovieMongoRepository } from '@/infra/db/mongodb'
import { DbDeleteMovie } from '@/data/usecases'

export const deleteDbAddMovie = (): DeleteMovie => {
  const DeleteMovieMongoRepository = new MovieMongoRepository()
  return new DbDeleteMovie(DeleteMovieMongoRepository)
}
