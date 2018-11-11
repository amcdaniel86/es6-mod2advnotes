//Examples of classes with functions
// BEST EXAMPLE OF CLASSES I'VE SEEN BECAUSE BANK BALANCE IS VERY RELATABLE, DEPOSITING AND WITHDRAWING $. 
// class BankAccount {
//   constructor (clientName, currency) {
//     this.clientName = clientName;
//     this.currency = currency;
//     this.balance = 0.0;
//   }

//   showBalance() {
//     return `${this.currency} ${this.balance}`;
//   }

//   withdrawMoney(amount) {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//     } else {
//       throw new Error('not enough funds');
//     }
//   }

//   depositMoney(amount) {
//     this.balance += amount
//   }
// }

// let account1 = new BankAccount('mike', '$');
// console.log(account1.depositMoney(100));
// console.log(account1.withdrawMoney(25));
// console.log(account1.showBalance());

// example 2
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }


//ANOTHER GREAT CLASS EXAMPLE for a grocery store selection
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  nameAndPrice() {
    console.log(
      "The product's name is: " + this.name,
      "and the product's price is " + this.price
    );
  }
}

class Electronic extends Product {
  constructor(name, price, brand) {
    super(name, price);
    this.brand = brand;
  }
}

let banana = new Product("Banana", 2);
banana.nameAndPrice();

let mac = new Electronic("Mac", 800, "Apple");
mac.nameAndPrice();

//  COMPARING WITH ARROW FUNCTION SYNTAX

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const evens = numbers.filter(function(singleNumber) {
//   return singleNumber % 2 === 0;
// });


const evens = numbers.filter(singleNumber => singleNumber % 2 === 0);

console.log(evens);

const foods = ["pizza", "ice cream", "salad", "oranges", "sushi"];

// const capsFoods = foods.map( singleFood => singleFood.toUpperCase());

// console.log(capsFoods);

const loudFoods = foods.map(singleFood => {
  const upperCased = singleFood.toUpperCase();
  return upperCased + "!!!";
});
console.log(loudFoods);

function inc(number, increment = 1) {
  return number + increment;
}
console.log(inc(2, 2)); // 4
console.log(inc(2)); // 3

function sum (a, b = 2, c) {
  return a + b + c;
}
console.log(sum(1, 5, 10));         // 16 -> b === 5
console.log(sum(1, undefined, 10)); // 13 -> b as default