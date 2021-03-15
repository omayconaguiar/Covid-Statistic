import { AddStatistic } from '@/domain/usecases'
import { AddStatisticRepository } from '@/data/protocols'

export class DbaddStatistic implements AddStatistic {
  constructor (private readonly addStatisticRepository: AddStatisticRepository) {}

  async addStatistic (data:AddStatistic.Params): Promise<void> {
    return await this.addStatisticRepository.addStatistic(data)
  }
}
