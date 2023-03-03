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

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
// let message;

// let totalPrice = pricePerDroid * orderedQuantity;
// let credits = customerCredits - totalPrice;

//  if (customerCredits < totalPrice) {
//   message = `Insufficient funds!`;
// } else {
//   message = `You ordered ${orderedQuantity} droids, you have ${credits} credits left`;
// }

// return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// function checkPassword(password) {
// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;
//
// if (password === null) {

// message = "Canceled by user!";
// } else if (password === "jqueryismyjam") {

// message = "Welcome!";
// } else {
// message = "Access denied, wrong password!";
// }

// return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// function checkStorage(available, ordered) {
// let message;

// if (ordered === 0) {
// message = "There are no products in the order!";
// } else if (ordered >= available) {
// message = "Your order is too large, there are not enough // items in stock!";
// } else {
// message = "The order is accepted, our manager will // contact you";
// }

// return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// function isNumberInRange(start, end, number) {
// const isInRange = number >= start && number <= end;

// return isInRange;
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// function checkIfCanAccessContent(subType) {
// const canAccessContent = subType === "pro" || subType === // "vip";

// return canAccessContent;
// }

// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));

// function isNumberNotInRange(start, end, number) {
// const isInRange = number >= start && number <= end;
// const isNotInRange = !isInRange;

// return isNotInRange;
// }

// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));

// function getDiscount(totalSpent) {
// const BASE_DISCOUNT = 0;
// const BRONZE_DISCOUNT = 0.02;
// const SILVER_DISCOUNT = 0.05;
// const GOLD_DISCOUNT = 0.1;
// let discount;

// if (totalSpent >= 50000) {
// discount = 0.1;
// } else if (totalSpent >= 20000 && totalSpent <= 50000) {
// discount = 0.05;
// } else if (totalSpent >= 5000 && totalSpent <= 20000) {
// discount = 0.02;
// } else {
// discount = 0;
// }

// return discount;
// }

// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));

/// function checkStorage(available, ordered) {

/// let message;
// удаляем===
// if (ordered > available) {
// message = "Not enough goods in stock!";
// } else {
// message = "The order is accepted, our manager will // contact you";
// }

//добавляем ---//
/// message =
/// ordered > available
///   ? "Not enough goods in stock!"
///   : "The order is accepted, our manager will contact you";

// 
/// return message;
/// }

/// console.log(checkStorage(100, 50));
/// console.log(checkStorage(100, 130));
/// console.log(checkStorage(200, 20));
/// console.log(checkStorage(200, 150));
/// console.log(checkStorage(150, 180));

// function checkPassword(password) {
// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;
// 
// message =
// password === "jqueryismyjam"
// ? "Access is allowed"
// : "Access denied, wrong password!";
// 
// return message;
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

// function getSubscriptionPrice(type) {
// let price;

// switch (
// type // Change this line
// ) {
// case "starter": // Change this line
// price = 0; // Change this line
// break;

// case "professional": // Change this line
// price = 20; // Change this line
// break;

// case "organization": // Change this line
// price = 50; // Change this line
// break;
// }

// return price;
// }

// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));

// function checkPassword(password) {
// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;

// if (password === null) {
// message = "Canceled by user!";
// } else if (password === ADMIN_PASSWORD) {
// message = "Welcome!";
// } else {
// message = "Access denied, wrong password!";
// }

//=======================
// switch (password) {
// case null:
// message = "Canceled by user!";
// break;

// case ADMIN_PASSWORD:
// message = "Welcome!";
// break;

// default:
// message = "Access denied, wrong password!";
// }
// /
// return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// function getShippingCost(country) {
// let message;
//

// switch (country) {
// case "China":
// message = "Shipping to China will cost 100 credits";
// break;

// case "Chile":
// message = "Shipping to Chile will cost 250 credits";
// break;

// case "Australia":
// message = "Shipping to Australia will cost 170 credits";
// break;

// case "Jamaica":
// message = "Shipping to Jamaica will cost 120 credits";
// break;

// default:
// message = "Sorry, there is no delivery to your country";
// }
// 
// return message;
// }

// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));

// function getNameLength(name) {
// const message = `Name ${name} is ${name.length} characters // long`; // Change this line

// return message;
// }
// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopic);

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

//========
// function getSubstring(string, length) {
// const substring = string.slice(0, length); // Change this line

// return substring;
// }
// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));

//===========================
// Обрезать слова и вставить в конце ... 
// function formatMessage(message, maxLength) {
//     let result = message.slice(0, maxLength);

//     result = 
//     message.length > maxLength 
//         ? result = message.slice(0, maxLength) + "..."
//         : result = message.slice(0, maxLength);
       
//     return result;
//   }
  
  
//   console.log(formatMessage("Curabitur ligula sapien", 23));
//   console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));
//   console.log(formatMessage("Vestibulum facilisis purus nec", 30));
  
//   console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
//   console.log(formatMessage("Curabitur ligula sapien", 16));
//   console.log(formatMessage("Vestibulum facilisis purus nec", 20));
  //==============================
  // Функція normalizeInput(input) приймає рядок (параметр input) і повертає такий самий рядок, але в нижньому регістрі. Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.
// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase(); // Change this line
  
//     return normalizedInput;
//   }
  
//   console.log(normalizeInput("Hello world"));
//   console.log(normalizeInput("This ISN'T SpaM"));
//   console.log(normalizeInput("Big SALE")); 

//===============
// Функція checkForName(fullname, name) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка name у рядок fullname.
// fullname - повне ім'я, що складається з двох слів (імені та прізвища), розділених пробілом.
// name - ім'я для перевірки входження в повне ім'я.
// Присвой змінній result вираз перевірки входження імені (параметр name), у повне ім'я (параметр fullname). Нехай функція чітко розрізняє регістр літер, тобто «Петя» і «петя» - для неї різні імена.

// function checkForName(fullName, name) {
//     const result = name.includes("E") || name.includes("V"); 
 
//      return result;
//    }
   
//    console.log(checkForName.includes("Egor Kolbasov", "Egor"));
//    console.log(checkForName.includes("Egor Kolbasov", "egor"));
//    console.log(checkForName.includes("Egor Kolbasov", "egOr"));
//    console.log(checkForName.includes("Egor Kolbasov", "Zhenya"));
//    console.log(checkForName.includes("Vadim Nekrasov", "Vadim"));
//    console.log(checkForName.includes("Vadim Nekrasov", "vadim"));
//    console.log(checkForName.includes("Vadim Nekrasov", "Dima"));
   
//============================
// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.

// function checkForSpam(message) {
//     let result;
    
//   result = message.toLowerCase().includes("sale") || message.toLowerCase().includes("spam");
    
//     return result;
//   }
  
//   console.log(checkForSpam("Latest technology news"));
//   console.log(checkForSpam("JavaScript weekly newsletter"));
//   console.log(checkForSpam("Get best sale offers now!"));
//   console.log(checkForSpam("Amazing SalE, only tonight!"));
//   console.log(checkForSpam("Trust me, this is not a spam message"));
//   console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
//   console.log(checkForSpam("[SPAM] How to earn fast money?"));

// ====================
