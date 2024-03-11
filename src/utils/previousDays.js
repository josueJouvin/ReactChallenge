export function previousDays(today) {
  const first = new Date(today.getFullYear(), today.getMonth(), 1).getDay()
  const previousDays = first === 0 ? 6 : first - 1
  const days = Array.from({ length: previousDays }, (_, index) => {
    return new Date(today.getFullYear(), today.getMonth(), 0 - index).getDate()
  })

  return days.reverse()
}
