import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeAddStatisticValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['cases', 'deaths', 'tests']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
