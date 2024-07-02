let n = 16;
let gridNumber = 1;
const newGrid = document.createElement("button");
const container = document.createElement("div");

newGrid.textContent = "New Grid";
newGrid.classList.add("resetGrid");
container.classList.add("container");

document.body.appendChild(newGrid);
document.body.appendChild(container);

let squaresNumber = n * n;

for (let i = 0; i < squaresNumber; i++) {
  const square = document.createElement("div");
  square.classList.add("box");
  square.style.width = `${100 / n}%`;
  square.style.paddingTop = `${100 / n}%`;
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "red";
  });
  square.addEventListener("mouseleave", () => {
    square.style.backgroundColor = "white";
  });
  container.appendChild(square);
}
const oldSquare = document.querySelectorAll(".box");
newGrid.addEventListener("click", () => {
  let squareInput = prompt(
    "enter the number of squares per side for the new grid (maximum is 100!)"
  );
  if (squareInput < 1 || squareInput > 100) {
    alert("error! enter a valid number");
    return (squareInput = prompt(
      "enter the number of squares per side for the new grid (maximum is 100!)"
    ));
  } else {
    if (gridNumber == 1) {
      oldSquare.forEach((item) => {
        container.removeChild(item);
      });
    } else {
      newSquare.forEach((item) => {
        container.removeChild(item);
      });
    }
    for (i = 0; i < squareInput * squareInput; i++) {
      const midSquare = document.createElement("div");
      midSquare.classList.add("box", "newBox");
      midSquare.style.width = `${100 / squareInput}%`;
      midSquare.style.paddingTop = `${100 / squareInput}%`;
      midSquare.addEventListener("mouseover", () => {
        midSquare.style.backgroundColor = "red";
      });
      midSquare.addEventListener("mouseleave", () => {
        midSquare.style.backgroundColor = "white";
      });
      container.appendChild(midSquare);
    }
    newSquare = document.querySelectorAll(".newBox");
    gridNumber += 1;
  }
});
