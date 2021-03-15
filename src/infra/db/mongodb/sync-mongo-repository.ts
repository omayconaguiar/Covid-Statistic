import { MongoHelper } from '@/infra/db'
import { SyncStatisticRepository } from '@/data/protocols/db'

export class SyncMongoRepository implements SyncStatisticRepository {
  async getSync (data: SyncStatisticRepository.Params) : Promise<void> {
    const surveyCollection = await MongoHelper.getCollection('sync')
    const call = new SyncMongoRepository 
    const exist = await call.verifyExist()    
    console.log('aaaaaaaaaaaaaaaaaaaa')
    if(exist.length === data.covidLength){
      return await call.removeAll()
    }else{
      await surveyCollection.insertOne(data)      
    }    
  }

  async verifyExist (): Promise<any> {
    const surveyCollection = await MongoHelper.getCollection('sync')
    return await surveyCollection.find({}).toArray()
  }
  
  async removeAll (): Promise<any> {
    const surveyCollection = await MongoHelper.getCollection('sync')
    return await surveyCollection.deleteMany({})
  }
}
