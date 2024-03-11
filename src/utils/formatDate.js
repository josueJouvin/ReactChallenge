export function formatDate(dateString) {
  const dateParts = dateString.split(' ')
  const year = dateParts[3]
  const month = String(new Date(dateString).getMonth()).padStart(2, '0')
  const day = String(dateParts[2]).padStart(2, '0')

  return `${year}-${month}-${day}`
}
