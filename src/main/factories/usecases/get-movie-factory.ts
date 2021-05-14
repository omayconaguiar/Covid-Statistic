import { GetMovie } from '@/domain/usecases'
import { MovieMongoRepository } from '@/infra/db/mongodb'
import { DbGetMovie } from '@/data/usecases'

export const makeDbGetMovie = (): GetMovie => {
  const GetMovieMongoRepository = new MovieMongoRepository()
  return new DbGetMovie(GetMovieMongoRepository)
}
