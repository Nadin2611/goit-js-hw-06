// function largestOfFour(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     let biggestNum = arr[i][0];
//     for (let j = 0; j < arr[i].length; j += 1) {
//       if (arr[i][j] > biggestNum) {
//         biggestNum = arr[i][j];
//       }
//     }
//     newArr.push(biggestNum);
//   }
//   return newArr;
// }
// console.log(
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ])
// );

// todo==========================================================================
// function confirmEnding(str, target) {
//   const strEnd = str.slice(-target.length);
//   return strEnd === target;
// }

// console.log(confirmEnding("Bastian", "n"));

// todo==========================================================================

// function repeatStringNumTimes(str, num) {
//   let newStr = "";
//   if (num <= 0) {
//     return;
//   } else {
//     for (let i = 1; i <= num; i += 1) {
//       newStr += str;
//     }
//   }
//   return newStr;
// }

// console.log(repeatStringNumTimes("abc", 3));

// todo==========================================================================
// function truncateString(str, num) {
//   if (str.length <= num) {
//     return str;
//   } else {
//     return str.slice(0, num) + "...";
//   }
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// todo==========================================================================
// function findElement(arr, func) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (func(arr[i])) {
//       return arr[i];
//     }
//   }
//   return undefined;
// }
// console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

// todo==========================================================================

// function titleCase(str) {
//   const lowercaseStr = str.toLowerCase();
//   console.log(lowercaseStr);

//   const words = lowercaseStr.split(" ");
//   console.log(words);

//   const newString = words
//     .map((word) => {
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join(" ");
//   return newString;
// }

// console.log(titleCase("I'm a little tea pot"));

// todo==========================================================================

function frankenSplice(arr1, arr2, n) {
  const newArr1 = arr1.slice();
  const newArr2 = arr2.slice();
  console.log(newArr1);
  console.log(newArr2);
  for (let i = 0; i < newArr2.length; i += 1) {
    newArr2.splice(n + i, 0, newArr1[i]);
  }
  return newArr2;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
