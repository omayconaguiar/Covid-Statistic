import { DeleteMovie } from '@/domain/usecases'
import { DeleteMovieRepository } from '@/data/protocols'

export class DbDeleteMovie implements DeleteMovie {
  constructor (private readonly deleteMovieRepository: DeleteMovieRepository) {}

  async deleteMovie (data: DeleteMovie.Params): Promise<void> {
    return await this.deleteMovieRepository.deleteMovie(data)
  }
}
