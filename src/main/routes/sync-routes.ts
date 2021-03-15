import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeGetSyncStatisticController, makeGetByCountryController,
   makeGetAllController, makeAddStatisticController} from '@/main/factories'
import { adminAuth } from '@/main/middlewares'

export default (router: Router): void => {
  router.get('/sync', adminAuth, adaptRoute(makeGetSyncStatisticController()))
  router.get('/statistics/:id', adminAuth, adaptRoute(makeGetByCountryController()))
  router.get('/statistics', adminAuth, adaptRoute(makeGetAllController()))
  router.post('/statistics/:id', adminAuth, adaptRoute(makeAddStatisticController()))
}
