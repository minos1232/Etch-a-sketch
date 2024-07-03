let n = 16; //squares per line
let gridNumber = 1;

const letters = "0123456789ABCDEF";
let color = "#";

const newGrid = document.createElement("button");
const container = document.createElement("div");

newGrid.textContent = "New Grid";

newGrid.classList.add("resetGrid");
container.classList.add("container");

window.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(newGrid);
  document.body.appendChild(container);

  let squaresNumber = n * n;

  function randomColor() {
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  //first grid
  for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement("div");
    square.classList.add("box");
    square.style.width = `${100 / n}%`;
    square.style.paddingTop = `${100 / n}%`;
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = randomColor();
      color = "#";
    });
    container.appendChild(square);
  }

  const oldSquare = document.querySelectorAll(".box");
  newGrid.addEventListener("click", () => {
    let squareInput = prompt(
      "enter the number of squares per side for the new grid (maximum is 100!)"
    );
    if (squareInput > 0 && squareInput < 101) {
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
        midSquare.addEventListener("mouseenter", () => {
          midSquare.style.backgroundColor = randomColor();
          color = "#";
        });
        container.appendChild(midSquare);
      }
      newSquare = document.querySelectorAll(".newBox");
      gridNumber += 1;
    } else {
      alert("error! enter a valid number");
    }
  });
});
