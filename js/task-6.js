let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введіть число');

  if (input === null) {
    break;
  }

  input = parseInt(input);

  if (Number.isNaN(input)) {
    alert('Було введено не число, попробуйте ще раз');
  } else {
    numbers.push(input);
  }
}

for (const number of numbers) {
  total += number;
}

console.log(`Загальна сума чисел дорівнює ${total}`);
