const findLongestWord = function (string) {
  // твій код
  let words = string.split(' ');
  let longestWord = '';
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

// Виклич функції для перевірки працездатності твоєї реалізації.

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

/*У цьому випадку ми використовуємо цикл for...of, який дозволяє ітерувати по масиву words без використання індексів. На кожній ітерації, функція перевіряє, чи є поточне слово найдовшим, і якщо так, то зберігає його як longestWord.

Цей варіант може бути зручним, якщо нам не потрібні індекси елементів масиву та ми хочемо скористатися більш зрозумілим і зручним синтаксисом циклу for...of.*/
