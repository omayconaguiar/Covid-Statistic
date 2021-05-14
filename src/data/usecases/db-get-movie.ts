import { GetMovie } from '@/domain/usecases'
import { GetMovieRepository } from '@/data/protocols'

export class DbGetMovie implements GetMovie {
  constructor (private readonly getMovieRepository: GetMovieRepository) {}

  async getMovie (data: GetMovie.Params): Promise<any> {
    return await this.getMovieRepository.getMovie(data)
  }
}
