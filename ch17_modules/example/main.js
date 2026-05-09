import { greetUser, welcomeMessage } from "./ex.js";
const input = document.getElementById("input");
const button = document.getElementById("btn");
const output = document.getElementById("output");
button.addEventListener("click", () => {
  const name = input.value;
  try {
    const greeting = greetUser(name);
    const welcome = welcomeMessage(name);
    output.textContent = `${greeting} ${welcome}`;
  } catch (error) {
    output.textContent = error.message;
  }
});
