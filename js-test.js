// function add(a, b, c) {

//  return a + b + c;

// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function makeMessage(name, price) {
// const message = `You picked ${name}, price per item is // ${price} credits`;

// return message;
// }

// let name = `Scanner`;
// name = `Reactor`;
// name = `Radar`;
// let price = 3500;
// price = 8000;
// price = 6150;

// console.log(makeMessage(`Scanner`, 3500));
// console.log(makeMessage(`Reactor`, 8000));
// console.log(makeMessage(`Radar`, 6150));

// function calculateTotalPrice(orderedQuantity, // pricePerItem) {
// const totalPrice = orderedQuantity * pricePerItem;
// return totalPrice;
// }

// let orderedQuantity = 5;
// orderedQuantity = 8;
// orderedQuantity = 3;
// orderedQuantity = 1;
// orderedQuantity = 12;
// let pricePerItem = 100;
// pricePerItem = 60;
// pricePerItem = 400;
// pricePerItem = 3500;
// pricePerItem = 70;

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `You ordered droids worth ${totalPrice} credits. Delivery(${deliveryFee} credits) is included in total price.`;
  // Change code above this line
  return message;
}

let orderedQuantity = 2;
orderedQuantity = 4;
orderedQuantity = 10;
let pricePerDroid = 100;
pricePerDroid = 300;
pricePerDroid = 70;
let deliveryFee = 50;
deliveryFee = 100;
deliveryFee = 200;

console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(10, 70, 200));
