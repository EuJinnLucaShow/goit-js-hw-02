const formatString = function (string) {
  // твій код
  if (string.length > 40) {
    return string.slice(0, 40) + '...';
  }
  return string;
};

// Виклич функції для перевірки працездатності твоєї реалізації.

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// повернеться оригінальний рядок

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// повернеться форматований рядок

console.log(formatString('Curabitur ligula sapien.'));
// повернеться оригінальний рядок

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// повернеться форматований рядок
