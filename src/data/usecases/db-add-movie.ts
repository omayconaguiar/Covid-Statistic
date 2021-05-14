import { AddMovie } from '@/domain/usecases'
import { AddMovieRepository } from '@/data/protocols'

export class DbAddMovie implements AddMovie {
  constructor (private readonly addMovieRepository: AddMovieRepository) {}

  async addMovie (data: AddMovie.Params): Promise<void> {
    return await this.addMovieRepository.addMovie(data)
  }
}
