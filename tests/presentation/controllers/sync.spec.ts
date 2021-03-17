import { SyncStatisticsController } from '@/presentation/controllers'
import { serverError, noContent } from '@/presentation/helpers'
import { SyncStaticSpy } from '@/tests/presentation/mocks'
import { throwError } from '@/tests/domain/mocks'

import MockDate from 'mockdate'

const mockRequest = (): SyncStatisticsController.Request => ({
  covidLength: 233,
  continent: null,
  country: 'Guam',
  population: null,
  cases: { new: '+3', active: 31, critical: null, recovered: null, total: 32 },
  deaths: { new: null, total: 1 },
  tests: { total: null },
  day: '2020-03-25',
  time: '2020-03-25T06:00:07+00:00'
})

type SutTypes = {
  sut: SyncStatisticsController
  syncStaticSpy: SyncStaticSpy
}

const makeSut = (): SutTypes => {
  const syncStaticSpy = new SyncStaticSpy()
  const sut = new SyncStatisticsController(syncStaticSpy)
  return {
    sut,
    syncStaticSpy
  }
}

describe('Sync Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should call SyncStatistic with correct values', async () => {
    const { sut, syncStaticSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(syncStaticSpy.result).toEqual(request)
  })

  test('Should return 500 if Sync throws', async () => {
    const { sut, syncStaticSpy } = makeSut()
    jest.spyOn(syncStaticSpy, 'getSync').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(noContent())
  })
})
