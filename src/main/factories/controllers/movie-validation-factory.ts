import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeMovieValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['movie','type','rate']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
