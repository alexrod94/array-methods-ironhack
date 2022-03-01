/*Iteration #1: Find the maximum
Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the largest.
*/

/* function maxOfTwoNumbers(num1, num2) {
  if (num1 === num2) {
    console.log("Ambos números son iguales");
  } else if (num1 >= num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(maxOfTwoNumbers(3, 3)); */

/*Iteration #2: Find the longest word
Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

You can use the following array to test your solution:

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot']; */

/*
function findLongestWord(array) {
  let maxLength = 0;
  let word = "";
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i].length > maxLength) {
      maxLength = array[i].length;
      word = array[i];
    }
    console.log(`Longest word: ${word}; length: ${maxLength}`);
  }
  const myWord = {
    miPalabra: word,
    miLongitud: maxLength,
  }; */

// const arrayDeNumeros = [1, 2, 3, 4, 5];

/* const resultado = {
    miPalabra: 'crocodile',
    miLongitud: 9
  } */

/*
  return myWord;
}

const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

console.log(findLongestWord(words));
*/

/*Iteration #3: Calculate the sum
Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

Implement the function named sumNumbers that takes an array of numbers as an argument, and returns the sum of all of the numbers in the array. Later in the course we will learn how to do this by using the reduce array method, which will make your work significantly easier. For now, let's practice "declarative" way adding values, using loops.

You can use the following array to test your solution:*/

/* const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(lista) {
  // For normal
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    console.log(`La suma ahora mismo es ${suma}`);
    suma += lista[i];
  } 

  lista.forEach((numero) => {
    suma += numero;
  });
  return suma;
}

console.log(sumNumbers(numbers)); */

/* Bonus - Iteration #3.1: A generic sum() function
The goal: Learn how to refactor your code. 💪

In the iteration 3, you created a function that returns the sum of an array of numbers. But what if we wanted to know how much is the sum of the length of all of the words in an array? What if we wanted to add boolean values to the mix? We wouldn't be able to use the same function as above, or better saying, we would have to tweak it a little bit so that it can be reused no matter what is in the array that is passed as argument when function sumNumbers() is called.

Here we are applying a concept we call polymorphism, that is, dealing with a functions' input independently of the types they are passed as.

Let's implement the function sum() that calculates the sum for array filled with (almost) any type of data. Note that strings should have their length added to the total, and boolean values should be coerced into their corresponding numeric values. Check the tests for more details.

You can use the following array to test your solution: */

/* const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];

function sum(mixedArr) {
  // For normal
  let suma = 0;

  mixedArr.forEach((elemento) => {
    console.log(typeof elemento);

    switch (typeof elemento) {
      case "string":
        suma += elemento.length;
        break;
      case "number":
        suma += elemento;
        break;
      case "boolean":
        if (elemento === true) {
          suma += 1;
        } else {
          suma += 0;
        }
        break;
    }
    console.log(suma);
  });
  return suma;
}

console.log(sum(mixedArr)); */

// should return: 57

/* Iteration #4: Calculate the average
Calculating an average is an extremely common task. Let's practice it a bit.

The logic behind this:

Find the sum as we did in the first exercise (or how about reusing that the sumNumbers()?)
Take that sum and divide it by the number of elements in the list. 

Level 1: Array of numbers
Implement the function averageNumbers that expects an array of numbers and returns the average of the numbers:

You can use the following array to test your solution: */

/* const numbers = [2, 6, 9, 10, 7, 4, 1, 9];

function findAverage(lista) {
  let media = 0;
  let suma = 0;

  lista.forEach((numero) => {
    suma += numero;
  });

  media = suma / lista.length;
  console.log(media);

  // return media;
}

findAverage(numbers); */

/* Level 2: Array of strings
Implement the function named averageWordLength that receives as a single argument an array of words and returns the average length of the words:

You can use the following array to test your solution: */

/* const words = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function findAverage(lista) {
  let media = 0;
  let suma = 0;

  lista.forEach((palabra) => {
    suma += palabra.length;
  });

  media = suma / lista.length;
  console.log(media);

  // return media;
}

findAverage(words); */

/* Bonus - Iteration #4.1: A generic avg() function
Create function avg(arr) that receives any mixed array and calculates average. Consider as mixed array an array filled with numbers and/or strings and/or booleans. We are following a similar logic to the one applied on the bonus iteration 4.1. 😉

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 5.7

*/

/* Iteration #5: Unique arrays
Take the following array, remove the duplicates, and return a new array. You are more than likely going to want to check out the indexOf Array method.

Do this in the form of a function uniquifyArray that receives an array of words as a argument.

You can use the following array to test your solution: */
/*
const words = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];
*/
/* function uniquifyArray(array) {
  let newArray = [];
  array.forEach((element) => {
    if (newArray.includes(element)) {
      console.log(`El elemento ${element} ya está incluido`);
    } else {
      newArray.push(element);
    }
  });
  return newArray;
}
*/
/*
function uniquifyArray(array) {
  let newArray = [];
  array.forEach((element) => {
    console.log(newArray.indexOf(element));
    if (newArray.indexOf(element) === -1) {
      newArray.push(element);
    } else {
      console.log("Ya existe el elemento");
    }
  });
  return newArray;
}

console.log(uniquifyArray(words)); */

/* Iteration #6: Find elements
Let's create a simple array search.

Declare a function named doesWordExist that will take in an array of words as one argument, and a word to search for as the other. Return true if it exists, otherwise, return false. Don't use indexOf for this one.

You can use the following array to test your solution:

const words = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience']; */

/* Iteration #7: Count repetition
Declare a function named howManyTimes that will take in an array of words as the first argument, and a word to search for as the second argument. The function will return the number of times that word appears in the array.

You can use the following array to test your solution:

const words = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

*/
