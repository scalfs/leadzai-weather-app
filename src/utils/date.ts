export function formatFromUnixTime(time: number) {
  const date = new Date(time)

  const formatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    hour12: false,
    minute: 'numeric',
    timeZone: 'UTC'
  })

  return formatter.format(date)
}
