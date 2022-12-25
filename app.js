const text = document.querySelector("textarea");
let counter = document.getElementById("counter");

const wordCounter = (str) => {
  let mutatedStr = str.split(" ");
  let count = mutatedStr.length;
  return count;
};

text.addEventListener("keydown", () => {
  let textarea = text.value;
  let count = wordCounter(textarea);
  counter.textContent = count;
});
