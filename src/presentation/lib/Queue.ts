// // TODO: ///////////////*NOT IMPLEMENTED*//////////////////

// import Queue from 'bull'
// // import { SyncStatic } from '@/domain/usecases'
// // get controller to post in queue
// import { SyncStatisticsController } from '@/presentation/controllers'
// var data: any
// // instatiate controller
// const jobs = new SyncStatisticsController(data)

// const sendToQueue = new Queue('SyncCovidData', {
//   redis: {
//     host: '127.0.0.1',
//     port: 6379
//   }
// })

// const queues = Object.values(jobs).map(job => ({
//   bull: sendToQueue,
//   handle: jobs.handle
// }))

// export default {
//   async add (data) {
//     return sendToQueue.add('SyncCovidData', data)
//   },
//   process (data) {
//     return queues.forEach(queue => {
//       sendToQueue.process('SyncCovidData', async job => {
//         await queue.handle(data)
//       })
//       queue.bull.on('failed', (job, err) => {
//         console.log('Job failed', 'SyncCovidData', job.data)
//         console.log(err)
//       })
//     })
//   }
// }
