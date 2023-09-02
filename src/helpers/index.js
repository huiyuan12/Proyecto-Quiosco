export function formatToEuros(number) {
    const options = {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    return number.toLocaleString('es-ES', options);
  }