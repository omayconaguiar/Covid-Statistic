import { PutMovie } from '@/domain/usecases'
import { PutMovieRepository } from '@/data/protocols'

export class DbPutMovie implements PutMovie {
  constructor (private readonly putMovieRepository: PutMovieRepository) {}

  async putMovie (data: PutMovie.Params): Promise<void> {
    return await this.putMovieRepository.putMovie(data)
  }
}
