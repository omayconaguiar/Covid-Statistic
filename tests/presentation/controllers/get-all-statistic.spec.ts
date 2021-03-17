import { GetAllController } from '@/presentation/controllers'
import { serverError, ok } from '@/presentation/helpers'
import { GetAllSpy } from '@/tests/presentation/mocks'
import { throwError } from '@/tests/domain/mocks'

import MockDate from 'mockdate'
import faker from 'faker'

type SutTypes = {
  sut: GetAllController
  getAllSpy: GetAllSpy
}

const mockRequest = (): GetAllController.Request => ({
  limit: faker.random.number(),
  offset: faker.random.number()
})

const makeSut = (): SutTypes => {
  const getAllSpy = new GetAllSpy()
  const sut = new GetAllController(getAllSpy)
  return {
    sut,
    getAllSpy
  }
}

describe('GetAll Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should call GetAll with correct values', async () => {
    const { sut, getAllSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(getAllSpy.params).toEqual({ ...request })
  })

  test('Should return 500 if GetAll throws', async () => {
    const { sut, getAllSpy } = makeSut()
    jest.spyOn(getAllSpy, 'getAll').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 200 on success', async () => {
    const { sut, getAllSpy } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok(getAllSpy.result))
  })
})
