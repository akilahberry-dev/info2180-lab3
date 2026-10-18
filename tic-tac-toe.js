document.addEventListener("DOMContentLoaded", function () 
    { const squares = document.querySelectorAll("#board div"); 
    
        squares.forEach(div => {
        div.classList.add("square")
        });

        console.log(`Added "squares" class to ${squares.length}(s)`);
        

});