import { SyncStatic } from '@/domain/usecases'
import { SyncStatisticRepository } from '@/data/protocols/db'
import { HttpCalls } from '@/presentation/adapter'
import Queue from '../lib/Queue'

import { noContent } from '@/presentation/helpers'

// how work the call to queue
// TODO: ///////////////*NOT IMPLEMENTED*//////////////////
export class PopulateCovid {
  constructor (
    private readonly syncStatic: SyncStatic
  ) {}

  async handle (sync: SyncStatisticRepository.Result): Promise<any> {
    try {
      var response = new HttpCalls()
      var covidData: any = await response.covidCall()

      await Queue.add(covidData)
      await Queue.process(covidData)

      return noContent()
    } catch (error) {
      console.log(error)
    }
  }
}
