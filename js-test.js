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

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

// const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// return message;
// }

// let orderedQuantity = 2;
// orderedQuantity = 4;
// orderedQuantity = 10;
// let pricePerDroid = 100;
// pricePerDroid = 300;
// pricePerDroid = 70;
// let deliveryFee = 50;
// deliveryFee = 100;
// deliveryFee = 200;

// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// function isAdult(age) {
// const passed = age >= 18;

// return passed;
// }

// console.log(isAdult(20) >= 18);
// console.log(isAdult(14) < 18);
// console.log(isAdult(8) > 18);
// console.log(isAdult(37) >= 18);

// const a = 2;
// const b = 5;

// console.log(a > b); // false
// console.log(b > a); // true
// console.log(a >= b); // false
// console.log(b >= a); // true

// console.log(a < b); // true
// console.log(b < a); // false
// console.log(a <= b); // true
// console.log(b <= a); // false

// function isValidPassword(password) {
// const SAVED_PASSWORD = "jqueryismyjam";
// const isMatch = password === "jqueryismyjam";

// return isMatch;
// }

// console.log(isValidPassword("mangodab3st") == "jqueryismyjam");
// console.log(isValidPassword("kiwirul3z") == "jqueryismyjam");
// console.log(isValidPassword("jqueryismyjam") == "jqueryismyjam");

// function checkAge(age) {
// let message;

// if (age >= 18) {

// message = "You are an adult";
// } else {
// if (age < 18) message = "You are a minor";
// }

// return message;
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// function checkStorage(available, ordered) {
// let message;

// if (available >= ordered) {
// message = "Order is processed, our manager will contact you.";
//  } else {
//  if (available <= ordered) message = "Not enough goods in stock!";
//  }

// return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a);
// console.log(b);
// console.log(c);

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
// let message;

// let totalPrice = customerCredits - pricePerDroid * orderedQuantity;

// if (totalPrice <= customerCredits) {
// message = `You ordered ${orderedQuantity} droids, you have ${totalPrice} // credits left`;
// } else {
// if (totalPrice <= customerCredits) message = `Insufficient funds!`;
// }

// return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  let totalPrice = pricePerDroid * orderedQuantity;
  let credits = customerCredits - totalPrice;

  if (customerCredits < totalPrice) {
    message = `Insufficient funds!`;
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${credits} credits left`;
  }

  // Change code above this line
  return message;
}

console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(5000, 10, 8000));
console.log(makeTransaction(2000, 8, 10000));
console.log(makeTransaction(500, 10, 5000));
