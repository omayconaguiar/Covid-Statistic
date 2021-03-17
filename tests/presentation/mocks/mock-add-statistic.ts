import { AddStatistic } from '@/domain/usecases'

export class AddStatisticSpy implements AddStatistic {
  params: AddStatistic.Params

  async addStatistic (params: AddStatistic.Params): Promise<void> {
    this.params = params
  }
}
