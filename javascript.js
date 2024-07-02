const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
let squaresNumber = 16 * 16;
for (let i = 0; i < squaresNumber; i++) {
  const square = document.createElement("div");
  square.classList.add("box");
  container.appendChild(square);
}
