import { makeAddStatisticController } from '@/main/factories'
import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

jest.mock('@/validation/validators/validation-composite')

describe('AddStatistic Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeAddStatisticController()
    const validations: Validation[] = []
    for (const field of ['cases', 'deaths', 'tests']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
