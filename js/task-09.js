// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
const btnChangeColorEl = document.querySelector(".change-color");
const spanBackgroundColor = document.querySelector(".color");

btnChangeColorEl.addEventListener("click", (event) => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanBackgroundColor.textContent = getRandomHexColor();
  console.log(getRandomHexColor());
});
