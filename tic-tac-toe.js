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
        div.addEventListener("mouseenter", function () {
            div.classList.add("hover");
    
        });
        div.addEventListener("mouseleave", function () {
 
             div.classList.remove("hover")
        });
        
    });
    console.log(`Added "squares" class to ${squares.length}(s)`);
});




