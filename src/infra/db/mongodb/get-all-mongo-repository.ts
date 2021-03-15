import { MongoHelper } from '@/infra/db'
import { GetAllRepository } from '@/data/protocols/db'

export class GetAlls implements GetAllRepository {
  async getAll (data: GetAllRepository.Params): Promise<GetAllRepository.Result> {
    const syncCollection = await MongoHelper.getCollection('sync')
    const findAll = await syncCollection.find({}).toArray()
    
    var getAll = data.limit && data.offset? await syncCollection.aggregate([
      {$limit: data.limit},
      {$skip:data.offset}
    ]).toArray(): findAll
    
    return getAll && MongoHelper.map(getAll)
  }
}
