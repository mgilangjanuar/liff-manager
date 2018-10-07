export default function URLValidation(url) {
  const HttpsURLValidationRegex = new RegExp(/^(https:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)

  return HttpsURLValidationRegex.test(url)
}