document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    const statusDiv = document.getElementById("status");
    const originalStatus = statusDiv.textContent;
    const newGameBtn = document.querySelector(".btn");
    let currentPlayer = "X";
    const gameState = ["", "", "", "", "", "", "", "", ""];
    const winningCombos = [
        [0, 1, 2],  //Rows
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6], // columns
        [1, 4, 7],
        [2, 5, 8],

        [6, 4, 2], // diagonals
        [0, 4, 8]
    
    ];
    function checkWinner() {
        for (const combo of winningCombos) {
            const a = combo[0];
            const b = combo[1];
            const c = combo[2];

          if (gameState[a] !== "" && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
          }
        }
            return null;
    }
    squares.forEach((div, index) => {
        div.classList.add("square")
        div.addEventListener("click", function () {
            if (gameState[index] !== "") {
                return;
            }

            div.textContent = (currentPlayer);
            div.classList.add(currentPlayer);
            gameState[index] = (currentPlayer);
            const winner = checkWinner();
                if (winner) {
                    statusDiv.textContent= `Congratulations! ${winner} is the Winner!`;
                    statusDiv.classList.add("you-won");
                } 

         if (currentPlayer === "X") {
               currentPlayer = "O";
            }
            else {
                currentPlayer = "X";
            }

            console.log(gameState);
        });

        div.addEventListener("mouseenter", function () {
            div.classList.add("hover");
    
        });
        div.addEventListener("mouseleave", function () {
 
             div.classList.remove("hover")
        });
        
    });

    newGameBtn.addEventListener("click", function () {
            squares.forEach((div) => {
            div.textContent = "";
            div.classList.remove("X", "O");  
            });

            gameState.fill("");
            currentPlayer = "X";
            statusDiv.textContent= originalStatus;
            statusDiv.classList.remove("you-won");

    });

    console.log(`Added "squares" class to 9 squares`);
});




