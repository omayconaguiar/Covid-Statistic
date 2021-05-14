import { MongoHelper } from '@/infra/db'
import {
  AddMovieRepository, GetMovieRepository,
  PutMovieRepository, DeleteMovieRepository
} from '@/data/protocols/db'
import { ObjectId } from 'mongodb'

export class MovieMongoRepository implements AddMovieRepository, GetMovieRepository, PutMovieRepository, DeleteMovieRepository {
  async addMovie (data: AddMovieRepository.Params): Promise<void> {
    const movieCollection = await MongoHelper.getCollection('movies')
    await movieCollection.insertOne(data)
  }

  async getMovie (data: GetMovieRepository.Params): Promise<any> {
    const movieCollection = await MongoHelper.getCollection('movies')
    const findAll = await movieCollection.find({}).toArray()
    var getAll = data.movie && data.type && data.rate ? await movieCollection.aggregate([
      { $where: data.movie },
      { $where: data.type },
      { $where: data.rate }
    ]).toArray() : findAll

    return getAll
  }

  async putMovie (data: PutMovieRepository.Params): Promise<any> {
    const movieCollection = await MongoHelper.getCollection('movies')
    var update = await movieCollection.updateMany(
      { _id: new ObjectId(data.id) },
      {
        $set: {
          movie: data.movie,
          type: data.type,
          rate: data.rate
        }
      }
    )

    return update && MongoHelper.map(update)
  }

  async deleteMovie (data: DeleteMovieRepository.Params): Promise<any> {
    const movieCollection = await MongoHelper.getCollection('movies')
    const delet = await movieCollection.deleteOne(
      { _id: new ObjectId(data.id) }
    )

    return delet && MongoHelper.map(delet)
  }
}
