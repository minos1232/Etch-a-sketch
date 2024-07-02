const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
let squaresNumber = 16 * 16;
for (let i = 0; i < squaresNumber; i++) {
  const square = document.createElement("div");
  square.classList.add("box");
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "red";
  });
  square.addEventListener("mouseleave", () => {
    square.style.backgroundColor = "white";
  });
  container.appendChild(square);
}
