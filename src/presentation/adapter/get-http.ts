import {SyncStatic} from '@/domain/usecases'
import axios from 'axios'

export default class HttpCalls {
    constructor () {}
    
    async covidCall (): Promise<SyncStatic.Params> {
        try {
          const {response} = (await axios.get('https://covid-193.p.rapidapi.com/statistics',
            {
                headers: {
                    "X-RapidAPI-Key": "077082e80fmsh46cfefb1145ca04p161766jsn14e513bad5c5"
                }
            }
          )).data;

          return response;
          } catch (error) {
            console.error(error);
          }
      }
}