export const formatDate = (date: Date): string => {
  const createdAtDate = new Date(date)
  const formattedDate = `${createdAtDate.toLocaleString('en-US', {
    month: 'long',
  })}, ${createdAtDate.getDate()} ${createdAtDate.getFullYear()}`

  return formattedDate
}
