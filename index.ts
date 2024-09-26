// 1 - Masala 

// let personName: string = "John Doe";
// let age: number = 30;
// let isStudent: boolean = true;
// let hobbies: string[] = ["Reading", "Gaming", "Coding"];

// function greet(person: string): string {
//   return `Hello, ${person}`;
// }

// function calculateSum(a: number, b: number): number {
//   return a + b;
// }

// function isAdult(personAge: number): boolean {
//   return personAge >= 18;
// }

// 2 - Masala 

// function countPositiveNumbers(arr: number[]): number {
//     return arr.filter(number => number > 0).length;
//   }  
//   const numbers = [3, 1, 0, 5, -7, 8];
//   const positiveCount = countPositiveNumbers(numbers);
//   console.log(positiveCount);
  

// 3 - Masala 

// function fizzBuzz(n: number): void {
//     for (let i = 1; i <= n; i++) {
//       if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//       } else if (i % 3 === 0) {
//         console.log("Fizz");
//       } else if (i % 5 === 0) {
//         console.log("Buzz");
//       } else {
//         console.log(i);
//       }
//     }
//   }  


// 4 - Masala 

// function sumArray(arr: number[]): number {
//     return arr.reduce((acc, current) => acc + current, 0);
//   }
//   const numbers = [2, 6, 3, 4, 5];
//   const sum = sumArray(numbers);
//   console.log(sum);
    

// 5 - Masala

// function countWords(str: string): number {
//     const words = str.trim().split(/\s+/);
//         return words[0] === "" ? 0 : words.length;
//   }
// console.log(countWords("Hello, world!"));


// 6 - Masala 

// function findMax(arr: number[]): number {
//     return Math.max(...arr);
//   }
//   const numbers = [3, 5, 7, 2, 9];
//   const maxNumber = findMax(numbers);
//   console.log(maxNumber);
    

// 7 - Masala 

// function findMin(arr: number[]): number {
//     return Math.min(...arr);
//   }
//   const numbers = [3, 5, 7, 2, 9];
//   const minNumber = findMin(numbers);
//   console.log(minNumber); 
    

// 8 - Masala 

// function contains(arr: number[], target: number): boolean {
//     return arr.includes(target);
//   }
//   const numbers = [1, 2, 3, 4, 5];
//   const result1 = contains(numbers, 3);
//   const result2 = contains(numbers, 6);
  
//   console.log(result1);
//   console.log(result2);
    

// 9 - Masala 

// function reverseArray(arr: number[]): number[] {
//     return arr.slice().reverse();
//   }
//   const numbers = [1, 2, 3, 4, 5];
//   const reversed = reverseArray(numbers);
//   console.log(reversed);
//   console.log(numbers);
    


// 10 - Masala 

// function capitalizeWords(str: string): string {
//     return str
//       .split(' ')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' '); 
//   }
//   const input = "this is a cat";
// const output = capitalizeWords(input);
// console.log(output);



// 11 - Masala 

// function average(arr: number[]): number {
//     if (arr.length === 0) return 0;
    
//     const sum = arr.reduce((acc, current) => acc + current, 0);
//     return sum / arr.length;
//   }
//   const numbers = [1, 2, 3, 4, 5];
// const avg = average(numbers);
// console.log(avg);

  

// 12 - Masala 

// function filterArr(arr: (number | string | boolean)[]): (number | string | boolean)[] {
//     const result: (number | string | boolean)[] = [];
    
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === arr[i - 1]) {
//         result.push(arr[i]);
//       }
//     }
  
//     return result;
//   }
  
//   const result = filterArr([1, 1, 1, 2, 2, true, true, true, 5, 5, 5, 5]);
//   console.log(result);
  

// Qoshimcha 10 - Masala


// 1 - Masala 

// function checkDifference(num: number): void {
//     const numStr = num.toString();
    
//     if (numStr.length !== 3) {
//         console.log("Iltimos, 3 xonali son kiriting.");
//         return;
//     }

//     const firstDigit = parseInt(numStr[0], 10);
//     const secondDigit = parseInt(numStr[1], 10);
//     const thirdDigit = parseInt(numStr[2], 10);

//     const sumFirstAndThird = firstDigit + thirdDigit;
//     const difference = sumFirstAndThird - secondDigit;

//     console.log(`${difference} ga katta.`);
// }

// checkDifference(546);

// 2  - Masala

// function findDivisorsSum(n: number): number {
//     let sum = 0;
  
//     for (let i = 1; i < n; i++) {
//       if (n % i === 0) {
//         sum += i;
//       }
//     }
  
//     return sum;
//   }
  
//   const inputNumber = 12;
//   const result = findDivisorsSum(inputNumber);
//   console.log(`1 dan ${inputNumber - 1} gacha bo'lgan sonlar orasida ${inputNumber} sonining bo'luvchilari yig'indisi: ${result}`);

// 3 - Masala 

// let arr = [true, "Salom", "JavaScript", 23, undefined];

// let updatedArr = arr.map(item => typeof item === 'string' ? null : item);

// console.log(updatedArr); 

// 4 - Masala 

// const arr = [2, 3, 4, 52, 2, 3, 4, 53, 2, 283, 43, 2];

// const maxValue = Math.max(...arr);

// console.log(`Arraydagi eng katta qiymat: ${maxValue}`);

// 5 - Masala 

// const numbers: number[] = [54, 32, 76, 12, 22];
// const totalSum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(totalSum);

// 6 - Masala 

// function findSmallestDigit(num: number): number {
//     if (!isThreeDigitNumber(num)) {
//       throw new Error('Kiritilgan son uch xonali bo\'lishi kerak!');
//     }
  
//     const digits = num.toString().split('').map(Number);
//     return Math.min(...digits);
//   }
  
//   function isThreeDigitNumber(num: number): boolean {
//     return num >= 100 && num <= 999;
//   }
  
//   const number = 381;
//   const smallestDigit = findSmallestDigit(number);
//   console.log(`Eng kichik raqam: ${smallestDigit}`);

// 7 - Masala 

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = arr.map(num => num % 2 === 0 ? 0 : num);

// console.log(result);

// 8 - Masala 

// function calculator(num1: number, num2: number, operation: string): number | string {
//     switch (operation) {
//       case '+':
//         return num1 + num2;
//       case '-':
//         return num1 - num2;
//       case '*':
//         return num1 * num2;
//       case '/':
//         if (num2 === 0) {
//           return 'Nolga bo‘lish mumkin emas';
//         }
//         return num1 / num2;
//       default:
//         return 'Noto‘g‘ri amal kiritildi';
//     }
//   }
  
//   const number1: number = parseFloat(prompt("Birinchi sonni kiriting:") as string);
//   const number2: number = parseFloat(prompt("Ikkinchi sonni kiriting:") as string);
//   const operator: string = prompt("Amalni kiriting (+, -, *, /):") as string;
  
//   const result: number | string = calculator(number1, number2, operator);
  
//   console.log(`${result}`);


// 9 - Masala 

// const names: string[] = ["Nuriddin", "Shaxboz", "Adham", "Suxrob"];

// const inputName: string = prompt("Ism kiriting:") as string;

// if (names.includes(inputName)) {
//   console.log(`${inputName} bor.`);
// } else {
//   console.log(`${inputName} yo'q.`);
// }


// 10 - Masala 

// const users = [
//     { 
//      age: 20,
//      name: "Nuriddin",
//      gmail: "nuriddin@gmail.com"
//     },
//     {
//         age: 15,
//         name: "Komiljon",
//         gmail: "komiljon@gmail.com"
//     },
//     {   
//         age:25,
//         name: "Izzatbek",
//         gmail: "izzatbek@gmail.com"
//     }
//   ];
  
//   const inputname: string = prompt("Ism kiriting:") as string;
  
//   const user = users.find((user) => user.name === inputname);
  
//   if (user) {
//     console.log(`Ismi: ${user.name}`);
//     console.log(`Yoshi: ${user.age}`);
//     console.log(`Gmail: ${user.gmail}`);
//   } else {
//     console.log(`${inputname} ismli foydalanuvchi topilmadi.`);
//   }
