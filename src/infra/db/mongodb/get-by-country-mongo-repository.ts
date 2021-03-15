import { MongoHelper } from '@/infra/db'
import { GetbyCountryRepository } from '@/data/protocols/db'
import { ObjectId } from 'mongodb'

export class GetByCountryMongoRepository implements GetbyCountryRepository {
  async getbyCountry (data: GetbyCountryRepository.Params): Promise<GetbyCountryRepository.Result> {
    const getByCountryCollection = await MongoHelper.getCollection('sync')
    const getByCountry = await getByCountryCollection.findOne({ _id: new ObjectId(data.id) })
    return getByCountry && MongoHelper.map(getByCountry)
  }
}
