document.addEventListener('DOMContentLoaded', function(){

    //Click counter
    var counter = 1;
    //Declearing Square
    var square = document.querySelectorAll(".square");
    //Rest button
    var clear = document.getElementById("end");
    //Who's turn is it?
    var turn = document.getElementById("turn");
    //Array for user combinations
    var userCombinations = []
    //The winning combinations
    var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
   
    //Winner
	var winner = function() {
		for (var i = 0; i < winningCombinations.length; i++) {
			if ((square[winningCombinations[i][0]].innerText) && 
			(square[winningCombinations[i][1]].innerText === square[winningCombinations[i][0]].innerText) &&
			(square[winningCombinations[i][2]].innerText === square[winningCombinations[i][0]].innerText)) {
			
				alert(square[winningCombinations[i][1]].innerText + " wins!");
				return;
			}
		}
	}

    //Clicking the squares  
    var clickSquare = function(event) {
    	// alert("hi")
    	event.onclick = function () {
    		// alert("hello")
    		if (event.innerHTML == ""){ 
    			if (counter % 2 === 0) {
    				event.style.color = "purple";
    				event.style.fontFamily = "sans-serif";
    				event.innerHTML = "O";          
    				turn.innerHTML = "X's Move";
    				turn.style.fontSize="25px";
    				counter ++;
    				winner();
    			} else {
    				event.style.color = "purple";
    				event.style.fontFamily = "sans-serif";
    				event.innerHTML = "X";  
    				turn.innerHTML = "O's Move";
    				turn.style.fontSize="25px";
    				counter ++;
    				winner();
    			}
    		} else {
    			alert("This move is already taken!");
    		}
    	}
    }

    for(var i=0; i<9; i++) {
    	// alert("hey");
    	var temp = square[i];
    	clickSquare(temp);
    }  


    //Reset button
    clear.onclick = function () {
    	for(var i = 0; i <9; i++) {
    		square[i].innerHTML = "" ;
    		turn.innerHTML = "X's Move";
    		counter = 1;
    		console.log("counter:",counter)
    	}
    }	

})