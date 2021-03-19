import { HttpCalls } from '@/presentation/adapter'
import { Controller } from '@/presentation/protocols'
import { SyncStatic } from '@/domain/usecases'
import { serverError, noContent } from '@/presentation/helpers'

export class SyncStatisticsController implements Controller {
  constructor (
    public syncStatic: SyncStatic
  ) {
  }

  async handle (request: SyncStatisticsController.Request): Promise<any> {
    try {
      var response = new HttpCalls()
      var covidData: any = await response.covidCall()

      for (var i = 0; i < covidData.length; i++) {
        await this.syncStatic.getSync({
          covidLength: covidData.length,
          continent: covidData[i].continent,
          country: covidData[i].country,
          population: covidData[i].population,
          cases: {
            new: covidData[i].cases.new,
            active: covidData[i].cases.active,
            critical: covidData[i].cases.critical,
            recovered: covidData[i].cases.recovered,
            total: covidData[i].cases.total
          },
          deaths: { new: covidData[i].deaths.new, total: covidData[i].deaths.total },
          tests: { total: covidData[i].tests.total },
          day: covidData[i].day,
          time: covidData[i].time
        })
      }
      return noContent()
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}

export namespace SyncStatisticsController {
  export type Request = {
    covidLength?: any
    covidData?: any
    continent: string
    country: string
    population: number
    cases: {
      new?: any
      active: number
      critical: number
      recovered: number
      total: number
    }
    deaths: {
      new?: any
      total?: any
    }
    tests: {
      total: number
    }
    day: string
    time: string
  }
}
