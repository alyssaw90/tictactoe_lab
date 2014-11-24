document.addEventListener('DOMContentLoaded', function(){  

	//Click counter
	var counter = 1;
	//Declaring the square
	var square = document.getElementsByClassName("square");
	//Start new game function
	var clear = document.getElementById("end");
	//Displays who turn it is
	var turn = document.getElementById("turn")
	//Winning combinations array and storing user combinations
	var winningCombinations = [["s1","s2","s3"],["s4","s5","s6"],["s7","s8","s9"],["s1","s4","s7"]["s2","s5","s8"],["s3","s6","s9"],["s1","s5","s9"],["s3","s5","s7"]];
	var lastMove = [];
  	var xArray = [];
  	var oArray = [];
  	var computerPlay = false;

//Computer playing
	document.querySelector('#check').addEventListener('click', function() {
		if (this.checked === true){
			computerPlay = true;
		} else {
			computerPlay = false;
		}
	})

//Clicking the squares  
    var clickSquare = function(event) {
        event.onclick = function () {
            if (event.innerHTML === ""){ 
                if (counter % 2 === 0) {
                    event.style.color = "blue";
                    event.style.fontFamily = "sans-serif";
                    event.innerHTML = "O";
                    turn.innerHTML = "X's Move";              
                    counter ++;
                if (aiPlay === true) {
            	aiMove(0);
            	turn++;
                } else {
                    event.style.color = "red";
                    event.style.fontFamily = "sans-serif";
                    event.innerHTML = "X";
                    turn.innerHTML = "O's Move"  
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
}

var computerPlay = function(temp) {
	for (var j = 0; j < 8 && temp == 0; j++) {
		win1 = document.querySelector(winningCombinations[j][0]);
		win2 = document.querySelector(winningCombinations[j][1]);
		win3 = document.querySelector(winningCombinations[j][2]);
		if (win1.classList.contains('O') && win2.classList.contains('O') && !win3.classList.contains('X')) {
			win3.classList.add('O');
			document.querySelector('.turn').innerHTML = "X's Move";
			temp = 1;
		} else if (win1.classList.contains('O') && win3.classList.contains('O') && !win2.classList.contains('X')) {
			document.querySelector('.turn').innerHTML = "X's Move";
			temp = 1;
		} else if (win2.classList.contains('O') && win3. classList.contains('O') && !win1.classList.contains('X')) {
			document.querySelector('.turn').innerHTML = "X's Move";
			temp = 1;
		} else if (win1.classList.contains('X') && win2.classList.contains('X') && !win3.classList.contains('O')){
			win3.classList.add('O');
			temp = 1;
		} else if (win1.classList.contains('X') && win3.classList.contains('X') && !win2.classList.contains('O')) {
			win2.classList.add('O');
			temp = 1;
		} else if (win2.classList.contains('X') && win3.classList.contains('X') && !win1.classList.contains('O')) {
			win1.classList.add('O');
			document.querySelector('.turn').innerHTML = "X's Move";
			temp = 1;
		}
	}
	for (var k = 0; k < square.length && temp == 0; k++) {
		if (square[k].classList.contains('X') == false && square[k].classList.contains('O') == false && temp ==0) {
			square[k].classList.add('O');
			document.querySelector('.turn').innerHTML = "X's Move";
			temp = 1;
		}
	}
}

document.addEventListener('click', function() {
	for (var j = 0; j < 8; j++) {
		win1 = document.querySelector(winningCombinations [j] [0]);
		win2 = document.querySelector(winningCombinations [j] [1]);
		win3 = document.querySelector(winningCombinations [j] [2]);
		if ((win1.classList.contains('X')) && (win2.classList.contains('X')) && (win3.classList.contains('X'))) {
			alert('X wins!');
			reset();
		} else if ((win1.classList.contains('O')) && (win2.classList.contains('O')) && (win3.classList.contains('O'))) {
			alert('O wins!');
			reset();
		}
	}
})



    //Doing a loop in the Clear function
    clear.onclick = function () {
        for(var i = 0; i <9; i++) {
            square[i].innerHTML = "" ;
            turn.innerHTML = "X's Move";
            counter = 1;
        }
    }
})




