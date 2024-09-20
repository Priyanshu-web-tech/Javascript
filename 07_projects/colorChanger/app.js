const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    body.style.background = e.target.id;
  });
});