const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
    button.innerText = " Hide password";
  } else {
    input.type = "password";
    button.innerText = " Show password";
  }
});
