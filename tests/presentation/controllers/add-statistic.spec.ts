import { AddStatisticController } from '@/presentation/controllers'
import { serverError, noContent, badRequest } from '@/presentation/helpers'
import { AddStatisticSpy , ValidationSpy } from '@/tests/presentation/mocks'
import { throwError } from '@/tests/domain/mocks'
import FakeObjectId from 'bson-objectid'

import MockDate from 'mockdate'
import faker from 'faker'

const mockRequest = (): AddStatisticController.Request => ({
  id: FakeObjectId.generate(),
  cases: {
    new: faker.random.number(),
    active: faker.random.number(),
    critical: faker.random.number(),
    recovered: faker.random.number(),
    total: faker.random.number()
  },
  deaths: {
    new: faker.random.number(),
    total: faker.random.number()
  },
  tests: {
    total: faker.random.number()
  }
})

type SutTypes = {
  sut: AddStatisticController
  addStatisticSpy: AddStatisticSpy
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const addStatisticSpy = new AddStatisticSpy()
  const sut = new AddStatisticController(addStatisticSpy, validationSpy)
  return {
    sut,
    validationSpy,
    addStatisticSpy
  }
}

describe('AddStatistic Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should call Validation with correct values', async () => {
    const { sut, validationSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(validationSpy.input).toEqual(request)
  })

  test('Should return 400 if Validation fails', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new Error()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(validationSpy.error))
  })

  test('Should call AddStatistic with correct values', async () => {
    const { sut, addStatisticSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(addStatisticSpy.params).toEqual({ ...request })
  })

  test('Should return 500 if AddStatistic throws', async () => {
    const { sut, addStatisticSpy } = makeSut()
    jest.spyOn(addStatisticSpy, 'addStatistic').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(noContent())
  })
})
