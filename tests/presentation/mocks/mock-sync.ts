import { SyncStatic } from '@/domain/usecases'

export class SyncStaticSpy implements SyncStatic {
  result: SyncStatic.Result

  async getSync (result: SyncStatic.Result): Promise<void> {
    this.result = result
  }
}
