export const formatPrice = (n: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

export const formatNumber = (n: number, decimals = 0) =>
  new Intl.NumberFormat("de-DE", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(n);

export const formatKm = (n: number) => `${formatNumber(n)} km`;

export const monthlyRate = (principal: number, annualRatePercent: number, months: number) => {
  const r = annualRatePercent / 100 / 12;
  if (r === 0) return principal / months;
  return (principal * r) / (1 - Math.pow(1 + r, -months));
};
