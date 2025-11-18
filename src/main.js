import "./style.css";

import data from "./db";

const body = document.querySelector("body");
const button = document.querySelector("button");
const nameDisplay = document.querySelector("p");
const darkModeRadio = document.getElementById("dark");
const lightModeRadio = document.getElementById("light");

button.addEventListener("click", () => {
  nameDisplay.textContent =
    data[
      getRandomIntInclusive(
        0,

        // Subtract 1 to account for zero-based indexing
        data.length - 1,
      )
    ].name;
});

darkModeRadio.addEventListener("change", () => {
  body.classList.remove("bg-gray-100");
  body.classList.add("bg-gray-800", "text-white");
});

lightModeRadio.addEventListener("change", () => {
  body.classList.remove("bg-gray-800", "text-white");
  body.classList.add("bg-gray-100");
});

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
