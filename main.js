window.onload = function () {

    //Click counter
    var counter = 1;
    //Declearing Square
    var square = document.getElementsByClassName("square");
    //Declearing Clear
    var clear = document.getElementById("end");
    //For displaying whos turn it is
    var turn = document.getElementById("turn");
    //Storing user's combinations
    var userCombinations = [];
    //The winning combinations
    var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


    //Clicking the squares  
    var clickSquare = function(event) {
        event.onclick = function () {
            if (event.innerHTML === ""){ 
                if (counter % 2 === 0) {
                    event.style.color = "blue";
                    event.style.fontFamily = "Impact,Charcoal,sans-serif";
                    event.innerHTML = "O";          
                    turn.innerHTML = "It is X's Move";
                    turn.style.fontSize="25px";     
                    counter ++;
                } else {
                    event.style.color = "red";
                    event.style.fontFamily = "Impact,Charcoal,sans-serif";
                    event.innerHTML = "X";  
                    turn.innerHTML = "It is O's Move";
                    turn.style.fontSize="25px";
                    counter ++;
                }
            } else {
                alert("This move is already taken!");
            }
        }
    }

    for(var i=0; i<9; i++) {
        clickSquare(square[i]);
    }   


    //Doing a loop in the Clear function
    clear.onclick = function () {
        for(var i = 0; i <9; i++) {
            square[i].innerHTML = "" ;
            turn.innerHTML = "X's Move";
            counter = 1;
            console.log("counter:",counter)
        }
    }	
}