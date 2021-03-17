import { GetByCountryController } from '@/presentation/controllers'
import { serverError, ok, badRequest } from '@/presentation/helpers'
import { GetByCountrySpy , ValidationSpy } from '@/tests/presentation/mocks'
import { throwError } from '@/tests/domain/mocks'

import MockDate from 'mockdate'
import faker from 'faker'

type SutTypes = {
  sut: GetByCountryController
  getbyCountrySpy: GetByCountrySpy
  validationSpy: ValidationSpy
}

const mockRequest = (): GetByCountryController.Request => ({
  id: faker.random.uuid()
})

const makeSut = (): SutTypes => {
  const getbyCountrySpy = new GetByCountrySpy()
  const validationSpy = new ValidationSpy()
  const sut = new GetByCountryController(getbyCountrySpy, validationSpy)
  return {
    sut,
    validationSpy,
    getbyCountrySpy
  }
}

describe('GetByCountry Controller', () => {
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

  test('Should call AddSurvey with correct values', async () => {
    const { sut, getbyCountrySpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(getbyCountrySpy.params).toEqual({ ...request })
  })

  test('Should return 500 if AddSurvey throws', async () => {
    const { sut, getbyCountrySpy } = makeSut()
    jest.spyOn(getbyCountrySpy, 'getByCountry').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 200 on success', async () => {
    const { sut, getbyCountrySpy } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok(getbyCountrySpy.result))
  })
})
