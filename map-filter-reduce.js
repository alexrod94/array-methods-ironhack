/* const myArray = [1, 2, 3, 4];

let newArray = [];
myArray.forEach((item) => {
  newArray.push(item * 2);
});

console.log(newArray);
*/

// const array = [1, 2, 3, 4, 5];

/* const array = ["a", "b", "c", "d", "e"];

const result = array.reduce(function (a, b) {
  return a + b;
});

console.log(result.toUpperCase()); */

/* const numbers = [30, 25, 7, 80];

const total = numbers.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
});
console.log(total); */

/* const productos = [
  {
    name: "Tomates",
    price: 5,
  },
  {
    name: "Lechuga",
    price: 1,
  },
  {
    name: "Cafe",
    price: 15,
  },
  {
    name: "Jamón serrano",
    price: 120,
  },
];

const total = productos.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.price;
}, 20);
console.log(total); */

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers);
