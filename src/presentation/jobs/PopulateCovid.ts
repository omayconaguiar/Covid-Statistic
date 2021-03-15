import {  SyncStatic } from '@/domain/usecases'

export default class PopulateCovid {
    constructor (    
      private readonly syncStatic: SyncStatic    
    ) {}
      
  key: 'SyncCovidData'
  async handle({data}) {        
      console.log('chegou')  
      for(var i = 0; i < data.covidData.length; i++) {      
          await this.syncStatic.getSync({
            covidLength: data.covidData.length, 
            continent: data.covidData[i].continent,
            country: data.covidData[i].country,
            population: data.covidData[i].population,
            cases: {
              new: data.covidData[i].cases.new,
              active: data.covidData[i].cases.active,
              critical: data.covidData[i].cases.critical,
              recovered: data.covidData[i].cases.recovered,
              total: data.covidData[i].cases.total,
            },
            deaths: { new: data.covidData[i].deaths.new, total: data.covidData[i].deaths.total},
            tests: { total: data.covidData[i].tests.total},
            day: data.covidData[i].day,
            time: data.covidData[i].time
        })
      }
  }
}
