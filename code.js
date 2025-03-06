// ****************************
// 1. count the repeated words
// ****************************
// var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// let wordCounts = {};
// for (let pet of pets) {
//   if (wordCounts[pet]) {
//     wordCounts[pet]++;
//   } else {
//     wordCounts[pet] = 1;
//   }
// }
// console.log(wordCounts);

// ****************************
// 2. remove duplicates from array
// ****************************
// let arr = [1,2,2,3,4,2,3]
// // console.log([... new Set(arr)])
// let b = []

// for(let i=0; i<arr.length; i++){
//   if(b.indexOf(arr[i]) === -1){
//     b.push(arr[i])
//   }
// }
// console.log(b)

// ****************************
// 3. reverse string
// ****************************
// let str = "hello";
// // 1st way
// let reversedStr = str.split('').reverse().join('')
// console.log(reversedStr)
// //  2nd way
// let result = ""
// for(let i=str.length-1; i>=0; i--){
//     result += (str[i])
// }
// console.log(result)

// ****************************
// 4. // factorialize
// ****************************
// let num =5;
// let factorialize = 1
// for(let i=1; i<=num; i++){
//     factorialize *= i;
// }
// console.log(factorialize)

// ****************************
// 5. find the longest word
// ****************************
// let str1 = "The quick brown fox jumped over the lazy dog";
// // 1st way
// // function findLongestWord(sen){
// //     let words = sen.split(" ");
// //     let longestWord="";
// //     for(let word of words){
// //         if(word.length > longestWord.length){
// //             longestWord = word
// //         }
// //     }
// //     return longestWord;
// // }
// // console.log(findLongestWord(str1))

// // 2nd way
// function findLongestWord(sen){

//    return sen.split(" ").sort((a,b) =>{
//        return b.length - a.length
//    })[0]
// }
// console.log(findLongestWord(str1))

// ****************************
// 6. find the first missing odd number
// ****************************
// let arr = [5,7,9,11,15,17]
// let initial = arr[0];
// for(let a of arr){
//     if(a !== initial){
//         break;
//     }
//     initial = initial+2
// }
// console.log(initial)

// ****************************
// 7.  find duplicates in array
// ****************************
// let arr = [1,2,3,3,4,2]

// const dups = [];
// const compare = [];

// for(let num of arr){
//     if(!compare.includes(num)){
//         compare.push(num)
//     }else{
//         dups.push(num)
//     }
// }
// console.log(dups)

// ****************************
// 8.  program to display time every 5 seconds
// ****************************
// let showTime = () => {
//   let dateTime = new Date();
//   let time = dateTime.toLocaleTimeString();
//   console.log(time);
// };
// setInterval(showTime, 5000);

// ****************************
// 8.  program to stop the setInterval() method after five times
// ****************************
// let count = 0;
// let showTime = () => {
//   if (count == 5) {
//     clearInterval(intervalId);
//   }
//   let dateTime = new Date();
//   let time = dateTime.toLocaleTimeString();
//   console.log(time);
//   count++;
// };
// let intervalId = setInterval(showTime, 2000);

// ****************************
// 9.  program to reverse each word in the sentence
// ****************************
// i/p= "how are you" -> o/p= "woh era uoy"
// let str = "how are you";
// let reversed = str.split(" ").map((rev) => {
//   rev.split("").reverse().join("");
// });
// console.log(reversed.join(" "));

// ****************************
// 10.  program to check if an object is array or not
// ****************************
// let checkArray = (ele) => {
//     console.log(Array.isArray(ele));
//   };
//   checkArray({});
//   checkArray([]);

// ****************************
// 11.  4 way to empty array
// ****************************
// let arr = [1, 2, 3, 4, 5];
// arr.length = 0
// arr = [];
// arr.splice(0, arr.length)
// while (arr.length > 0) {
//   arr.pop();
// }
// console.log(arr);

// ****************************
// 12.  convert array to object
// ****************************
// const arr = ["a", "b", "c"];
// 1st way
// const obj = Object.fromEntries(arr.map((ele, index) => [ele, index]));
// console.log(obj);
// 2nd way
// const obj = arr.reduce((acc, value, index) => {
//   acc[index] = value;
//   return acc;
// }, {});
// console.log(obj);

// ****************************
// 13.  array sorting number/string
// ****************************
// const arr = [2, 1, 3, 4, 2];
// const sorted = arr.sort((a, b) => {
//   return a - b;
// });
// console.log(sorted);
// // string
// const arr1 = ["adc", "aaa", "acb"];
// const sorted1 = arr1.sort((a, b) => {
//   return (a > b) - (a < b);
// });
// console.log(sorted1);

// ****************************
// 14.  4 digit otp
// ****************************
// let num = Math.random();
// const otp = Math.floor(num * 9000 + 1000);
// console.log(otp);

// ****************************
// 15. find the missing number
// ****************************
// const arr = [1, 2, 3, 5];
// let n = arr.length + 1; // Total numbers if none were missing
// let sum = (n * (n + 1)) / 2; // Sum of the first n natural numbers
// const arrSum = arr.reduce((acc, val) => {
//   return acc + val;
// }, 0); // Sum of array elements
// const missingNum = sum - arrSum; // The difference is the missing number
// console.log(missingNum);

// ****************************
// 16. program to returns a new array with only the even numbers.
// ****************************
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const even = arr.filter((ele) => {
//   return ele % 2 === 0;
// });
// console.log(even);

// ****************************
// 17. program to check if a number is prime or not
// ****************************
// let number = 4;
// let isPrime = true;
// for (let i = 2; i < number; i++) {
//   if (number % i == 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime) {
//   console.log(`${number} is prime number`);
// } else {
//   console.log(`${number} is not a prime number`);
// }

// ****************************
// 18. Program to Find Largest Element in an Array
// ****************************
// let arr = [10, 15, 38, 20, 13];
// // 1st way
// const largest = Math.max(...arr);
// console.log(largest);
// // 2nd way
// const sorted = arr.sort();
// console.log(arr.sort()[sorted.length - 1]);
// // 3rd way
// const largestNumber = arr.reduce((largest, curr) => {
//   return curr > largest ? curr : largest;
// }, arr[0]);
// console.log(largestNumber);
// // 4th way
// let largestNum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largestNum) {
//     largestNum = arr[i];
//   }
// }
// console.log(largestNum);

// ****************************
// 19. Program to Find largest number in nested array
// ****************************
// const arr = [
//     34,
//     65,
//     67,
//     [43, 76, 87, 23, 56, 7, [54, 7, 87, 23, 79, 994, 2], 54],
//     54,
//     4,
//     2,
//   ];
//   const findLargest = (arr) => {
//     let largest = 1;
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         return findLargest(arr[i]);
//       }
//       if (arr[i] > largest) {
//         largest = arr[i];
//       }
//     }
//     return largest;
//   };
//   console.log(findLargest(arr));

// ****************************
// 20. program to generate fibonacci series up to n terms
// ****************************
// let n1 = 0, n2 = 1, nextTrem;
// let number = 5;
// for (let i = 1; i <= number; i++) {
//   console.log(n1);
//   nextTrem = n1 + n2;
//   n1 = n2;
//   n2 = nextTrem;
// }

// ****************************
// 21. program to Capitalize the first letter of each word from a string
// ****************************
// const mySentence = "freeCodeCamp is an awesome resource";
// words = mySentence.split(" ");
// const finalWord = words
//   .map((word) => {
//     return word[0].toUpperCase() + word.substring(1);
//   })
//   .join(" ");
// console.log(finalWord);
// // 2nd way
// const finalsentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
// console.log(finalsentence);

// ****************************
// 21. program to count vowels letter in a string
// ****************************
// let str = "Hey, I am pooja";
// let vowels = ["a", "e", "i", "o", "u"];
// let count = 0;
// str
//   .toLowerCase()
//   .split("")
//   .forEach((ele) => {
//     if (vowels.includes(ele)) {
//       count++;
//     }
//   });
// console.log(count);

// ****************************
// 22. program to compare two array are equal or not?
// ****************************
// let arr1 = ["4", "8", "10", "9", "5"];
// let arr2 = ["5", "10", "12", "9", "4"];
// function comapreArray() {
//   const isSame = arr1.length === arr2.length;
//   if (!isSame) {
//     return "length are not equal";
//   }
//   if (isSame) {
//     for (let a of arr1) {
//       if (!arr2.includes(a)) {
//         return "array are not equal";
//       }
//     }
//   }
//   return "array are equal";
// }
// console.log(comapreArray());

// ****************************
// 23. JavaScript function using recursion to calculate the factorial of a given number, such as 5
// ****************************
// function factorial(num) {
//     // Base case: factorial of 0 or 1 is 1
//     if (num === 0 || num === 1) {
//       return 1;
//     }
//     // Recursive case
//     return num * factorial(num - 1);
//   }
//   console.log(factorial(5));

// ****************************
// 24. To flatten a nested array into a single-level array
// ****************************
// function flattenArray(arr) {
//     let flatArray = [];
//     arr.forEach((element) => {
//       if (Array.isArray(element)) {
//         flatArray = flatArray.concat(flattenArray(element));
//       } else {
//         flatArray.push(element);
//       }
//     });
//     return flatArray;
//   }
//   const nestedArray = [1, [2, 3], 4, [5, 6, [7, 8]]];
//   console.log(flattenArray(nestedArray));

// 2nd way to flaten nested array using builtin method
// const nestedArray = [1, [2, 3], 4, [5, 6, [7, 8]]];
// let result = nestedArray.flat(Infinity);
// console.log(result);

// 3rd way Non-Recursive Flattening:
// const nestedArray = [1, [2, 3], 4, [5, 6, [7, 8]]];
// function flattenArray() {
//   let stack = [nestedArray];
//   let flatArray = [];
//   while (stack.length > 0) {
//     const element = stack.pop();
//     // console.log(element);
//     if (Array.isArray(element)) {
//       stack.push(...element);
//     } else {
//       flatArray.push(element);
//     }
//   }
//   return flatArray.reverse();
// }
// console.log(flattenArray(nestedArray));

// ****************************
// 25. Write a JavaScript function that directs whether the given strings are anagrams
// ****************************
// const string1 = "listen";
// const string2 = "silent";
// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return "not anagrams, length are not equal";
//   }
//   const sortedStr = (str) => {
//     return str.split("").sort().join();
//   };
//   return sortedStr(str1) === sortedStr(str2);
// }
// if (isAnagram(string1, string2)) {
//   console.log(`"${string1}" and "${string2}" are anagrams.`);
// } else {
//   console.log(`"${string1}" and "${string2}" are not anagrams.`);
// }

// ****************************
// 26. // Write a JavaScript function that uses an array of objects and keys and shows a new array based on the values of the key in ascending order
// ****************************
// const data = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 20 },
//   ];

//   function sortByKey(arr, key) {
//     return arr.sort((a, b) => {
//       if (a[key] < b[key]) {
//         return -1;
//       } else if (a[key] > b[key]) {
//         return 1;
//       } else {
//         return 0;
//       }
//     });
//   }
//   console.log(sortByKey(data, "age"));

// ****************************
// 27. find the maximum count of consecutive same characters in the given string
// ****************************
// function findConsecutive(input) {
//     let maxChar = "";
//     let maxCount = 0;
//     let currentChar = input[0];
//     let currentCount = 1;

//     for (let i = 1; i < input.length; i++) {
//       if (input[i] === currentChar) {
//         currentCount++;
//       } else {
//         if (currentCount > maxCount) {
//           maxChar = currentChar;
//           maxCount = currentCount;
//         }
//         currentChar = input[i];
//         currentCount = 1;
//       }
//     }
//     if (currentCount > maxCount) {
//       maxChar = currentChar;
//       maxCount = currentCount;
//     }
//     return `${maxChar}: ${maxCount}`;
//   }
//   let str = "aaaaabbbbbcccaaa";
//   console.log(findConsecutive(str));

// ****************************
// 28. given an array of strings, and we need to find all the strings that are substrings of another string in the array
// ****************************
// function findSubstrings(arr) {
//     const substrings = new Set();

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j && arr[j].includes(arr[i])) {
//                 substrings.add(arr[i]);
//                 break; // No need to check further if it's already a substring
//             }
//         }
//     }

//     return Array.from(substrings);
// }

// // Example usage
// const arr = ["mass", "as", "hero", "superhero"];
// const result = findSubstrings(arr);
// console.log(result); // Output: ['as', 'hero']

// ****************************
// 29. JavaScript code to find the longest ascending length in an array:
// ****************************
// function longestAscendingLength(arr) {
//     if (arr.length === 0) return 0;
//     let maxLength = 1;
//     let currentLength = 1;
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > arr[i - 1]) {
//         currentLength++;
//       } else {
//         maxLength = Math.max(maxLength, currentLength);
//         currentLength = 1; // Reset for the next sequence
//       }
//     }
//     // Final update in case the longest sequence ends at the last element
//     maxLength = Math.max(maxLength, currentLength);
//     return maxLength;
//   }
//   // Test the function
//   const arr = [1, 3, 2, 4, 6];
//   console.log(longestAscendingLength(arr)); // Output: 3

// another way
// function longestAcending(arr) {
//   let currentlength = 1;
//   let maxLength = 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1]) {
//       currentlength++;
//     } else {
//       if (currentlength > maxLength) {
//         maxLength = currentlength;
//       }
//       currentlength = 1;
//     }
//   }
//   return maxLength;
// }
// const arr = [1, 3, 2, 4, 6];
// console.log(longestAcending(arr));

// ****************************
// 30. find missing number from array
// ****************************
// function findMissing(arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   let missing = [];
//   for (let i = min; i <= max; i++) {
//     if (arr.indexOf(i) < 0) {
//       missing.push(i);
//     }
//   }
//   return missing;
// }
// let arr = [1, 2, 3, 6];
// console.log(findMissing(arr));

// ****************************
// 31. swap first & last character of string
// ****************************
// function swap(value) {
//   const length = value.length;
//   const swaped =
//     value.charAt(length - 1) + value.substring(1, length - 1) + value.charAt(0);
//   return swaped;
// }
// const str = "hello";
// console.log(swap(str));

// ****************************
// 32. count number of each new fruit
// ****************************
// function countFruit(fruit) {
//   const countedFruit = {};
//   fruit.forEach((ele) => {
//     for (each in ele) {
//       if (countedFruit[each]) {
//         countedFruit[each] = countedFruit[each] + ele[each];
//       } else {
//         countedFruit[each] = ele[each];
//       }
//     }
//   });
//   return countedFruit;
// }
// const fruit = [
//   { Apple: 4, Orange: 7, Grape: 3 },
//   { Guava: 6, Lemoan: 4, Banana: 8 },
//   { Orange: 5, Banana: 7, Apple: 7 },
// ];
// console.log(countFruit(fruit));

// ****************************
// 33. count the occurrences of characters in a string and format the output as required ("3a2b1c" for "aaabbc"):
// ****************************
// function countChar(str) {
//   let result = "";
//   let count = 1;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       count++;
//     } else {
//       result += count + str[i];
//       count = 1;
//     }
//   }
//   return result;
// }
// let str = "aaabbc"; //op- 3a2b1c
// console.log(countChar(str));
