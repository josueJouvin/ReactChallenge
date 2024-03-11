export function daysOfMonth(today) {
  const lastDay = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate()
  const daysOfMonth = Array.from({ length: lastDay }, (_, index) => index + 1)

  return daysOfMonth
}
