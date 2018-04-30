export function _getErrors(errorDict) {
  // translate django errors dict
  // to errors, undertandable by app
  let errors = {}
  for (var error in errorDict) {
    if (error === 'non_field_errors') {
      // django assumes that each field can have more tha one error
      // it's not true for our app, so we just take first
      errors['genericError'] = errorDict[error][0]
    } else {
      errors[error + 'Error'] = errorDict[error][0]
    }
  }
  return errors
}