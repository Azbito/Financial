export default function usdFormater(amount: number) {
  const result: string = amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  return result
}
