export function calculateReturns(principal: number, rate: number, years: number) {
  // Compound interest formula: A = P * (1 + r/100)^n
  return Math.round(principal * Math.pow(1 + rate / 100, years));
}
