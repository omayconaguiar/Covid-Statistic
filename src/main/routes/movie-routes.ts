import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeMovieController, getMovieController, putMovieController, deleteMovieController } from '@/main/factories'
import { adminAuth } from '@/main/middlewares'

export default (router: Router): void => {
  router.post('/movie', adminAuth, adaptRoute(makeMovieController()))
  router.get('/movie', adminAuth, adaptRoute(getMovieController()))
  router.put('/movie/:id', adminAuth, adaptRoute(putMovieController()))
  router.delete('/movie/:id', adminAuth, adaptRoute(deleteMovieController()))
}
