import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}
export default function getValidation(
  validationError: ValidationError,
): Errors {
  const errors: Errors = {};

  validationError.inner.forEach(error => {
    errors[error.path] = error.message;
  });

  return errors;
}
