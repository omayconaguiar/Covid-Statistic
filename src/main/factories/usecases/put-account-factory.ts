import { PutMovie } from '@/domain/usecases'
import { MovieMongoRepository } from '@/infra/db/mongodb'
import { DbPutMovie } from '@/data/usecases'

export const putDbAddMovie = (): PutMovie => {
  const PutMovieMongoRepository = new MovieMongoRepository()
  return new DbPutMovie(PutMovieMongoRepository)
}
