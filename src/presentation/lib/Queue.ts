import Queue from 'bull'
import redisConfig from '../config/redis'
import { SyncStatic } from '@/domain/usecases'
import PopulateCovid from '../jobs/PopulateCovid'
var data: SyncStatic
const jobs = new PopulateCovid(data)

const queues = () => ({
  bull: new Queue(jobs.key, `redis://${redisConfig.host}:${redisConfig.port}`),
  name: jobs.key,
  handle: jobs.handle
  // options: job.options,
})

export default {
  queues,
  add (name, data) {
    const queue = this.queues.find(queue => queue.name === name)

    return queue.bull.add(data, queue.options)
  },
  process () {
    return this.queues = () => {
      this.queues.bull.process(this.queues.handle)

      this.queues.bull.on('failed', (job, err) => {
        console.log('Job failed'/* , queue.key, job.data */)
        // console.log(err);
      })
    }
  }
}
