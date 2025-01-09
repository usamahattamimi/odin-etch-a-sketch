const button = document.querySelector("button");

const getUserChoice = () => {
  while (true) {
    const input = prompt("Masukkan jumlah kotak yang Anda inginkan (10-100):");
    const userInput = Number(input);

    if (!isNaN(userInput) && userInput >= 10 && userInput <= 100) {
      return userInput;
    } else {
      alert("Input tidak valid! Masukkan angka antara 10 hingga 100.");
    }
  }
};

const createSketch = (size = 16) => {
  containerEl.innerHTML = ""; // Hapus grid lama
  const boxSize = 960 / size; // Hitung ukuran kotak

  containerEl.setAttribute(
    "style",
    `width: 960px; display: flex; gap: 0; flex-wrap: wrap; border: 1px solid black;`
  );

  for (let i = 0; i < size * size; i++) {
    const divEl = document.createElement("div");
    divEl.classList.add("box");
    divEl.setAttribute(
      "style",
      `width: ${boxSize}px; height: ${boxSize}px; border: 1px solid black; box-sizing: border-box;`
    );

    containerEl.append(divEl);
  }
};

button.addEventListener("click", () => {
  const gridSize = getUserChoice();
  createSketch(gridSize);
});

const containerEl = document.querySelector(".container");
createSketch(); // Buat grid default
containerEl.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("box")) {
    e.target.classList.add("hover");
  }
});
