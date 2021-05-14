import { AddMovie } from '@/domain/usecases'
import { MovieMongoRepository } from '@/infra/db/mongodb'
import { DbAddMovie } from '@/data/usecases'

export const makeDbAddMovie = (): AddMovie => {
  const AddMovieMongoRepository = new MovieMongoRepository()
  return new DbAddMovie(AddMovieMongoRepository)
}
