// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const fontSizeControlEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");
fontSizeControlEl.addEventListener("input", (event) => {
  textEl.style.fontSize = `${fontSizeControlEl.value}px`;
});
