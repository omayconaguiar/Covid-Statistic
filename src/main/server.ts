import 'module-alias/register'
import { MongoHelper } from '../infra/db/mongodb/mongo-helper'
import env from './config/env'
import Queue from '../presentation/lib/Queue';
// import BullBoard from 'bull-board';

Queue.process(); 
// BullBoard.setQueues(Queue.queues.map(queue => queue.bull));
MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  })
  .catch(console.error)
