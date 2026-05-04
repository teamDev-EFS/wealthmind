export function formatCurrency(amount: number, currency: string = 'INR') {
  return amount.toLocaleString('en-IN', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  });
}
