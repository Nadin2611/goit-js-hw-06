const categoryElChildren = document.querySelector("#categories").children;
console.log(categoryElChildren);
let number = 0;
[...categoryElChildren].forEach((element) => {
  number += 1;
});
console.log(`Number of categories: ${number}`);

const itemEl = [...categoryElChildren].children;
console.log(itemEl);
