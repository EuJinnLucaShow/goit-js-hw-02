const checkForSpam = function (message) {
  // твій код
  if (
    message.toLowerCase().includes('spam') ||
    message.toLowerCase().includes('sale')
  ) {
    return true;
  }
  return false;
};
/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// варіант з const for if;
/*const checkForSpam = function(message) {
  const lowerCaseMessage = message.toLowerCase();
  const spamWords = ['spam', 'sale'];
  
  for (let i = 0; i < spamWords.length; i++) {
    if (lowerCaseMessage.includes(spamWords[i])) {
      return true;
    }
  }
  
  return false;
};
*/
