// Part 2

const fs = require('fs');

const fileContents = fs.readFileSync('shopping-basket.json', 'utf-8');
const data = JSON.parse(fileContents);

console.log(data);

for (let item of data.basket) {
  console.log(`${item.name}: $${item.price * item.quantity}`)
}

const index = data.basket.findIndex((item) => {
  return item.name == 'Candles';
});

data.basket[index].quantity = 10;
const jsonString = JSON.stringify(data, null, 2);
fs.writeFileSync('new-basket.json', jsonString, 'utf-8');