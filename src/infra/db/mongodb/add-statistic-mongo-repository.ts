import { MongoHelper } from '@/infra/db'
import { AddStatisticRepository } from '@/data/protocols/db'
import {ObjectId} from 'mongodb'

export class AddStatistics implements AddStatisticRepository {
  async addStatistic (data: AddStatisticRepository.Params): Promise<void> {
    const syncCollection = await MongoHelper.getCollection('sync')
    var update = await syncCollection.updateMany(
      { _id: new ObjectId(data.id) },
        {
          $set: {
            "cases": {
              "new": data.cases.new ,
              "active": data.cases.active ,
              "critical": data.cases.critical ,
              "recovered": data.cases.recovered ,
              "total": data.cases.total 
            },
            "deaths": {
              "new": data.deaths.new ,
              "total": data.deaths.total 
            },
            "tests": {
              "total": data.tests.total 
            }
          }
        }
    )    

    return update && MongoHelper.map(update)
  }
}
