import normalize from 'normalize-object';

export const transformResponse = (response) => {
  return normalize(response, 'snake');
};

export const formatNumber = (number, type) => {
  if (type === 'currency') {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: Number.isInteger(number) ? 0 : 2,
    });
  }
  return number.toLocaleString();
};

export function capitalize(sentence) {
  const words = sentence.split(' ');
  const capitalizedWords = words.map((word) => {
    if (word.length === 0) {
      return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return capitalizedWords.join(' ');
}
