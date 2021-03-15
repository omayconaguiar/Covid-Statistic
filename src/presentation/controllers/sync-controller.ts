import HttpCalls from '../adapter/get-http'
import Queue from '../lib/Queue'

import { Controller, HttpResponse } from '@/presentation/protocols'
import { SyncStatic } from '@/domain/usecases'
import { serverError, noContent } from '@/presentation/helpers'

export class SyncStatisticsController implements Controller {
  constructor (
    private readonly syncStatic: SyncStatic
  ) {}

  async handle (): Promise<HttpResponse> {
    try {
      var response = new HttpCalls()
      var covidData: any = await response.covidCall()
      await Queue.add('SyncCovidData', { covidData })

      return noContent()
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
