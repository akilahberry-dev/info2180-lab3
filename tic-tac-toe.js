document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");

    let currentPlayer = "X";
    const gameState = ["", "", "", "", "", "", "", "", ""];
    squares.forEach((div, index) => {
        div.classList.add("square")
        div.addEventListener("click", function () {
            div.textContent = (currentPlayer);
            div.classList.add(currentPlayer);
            gameState[index] = (currentPlayer);
            if (currentPlayer === "X") {
                currentPlayer = "O";
            }
            else {
                currentPlayer = "X";
            }

            console.log(gameState);
        });
      
    });
    console.log(`Added "squares" class to ${squares.length}(s)`);
});




