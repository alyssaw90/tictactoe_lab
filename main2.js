$(function(){
	// alert("I am loading");
	// Click counter
	var counter = 1;
	var square = $(".square");
	//Array of winning combinations
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
	$( ".square" ).on('click', function() {
  		// alert("You pressed the square");
  		// console.log("hey");
  			if ($(this).text() == "") {
  				// console.log("hey");
    			if (counter % 2 === 0) {
    				$(this).css("color", "#3498db").css("fontFamily", "sans-serif").css("fontSize", "25px");
    				$(this).text("O");          
    				turn.innerHTML = "X's Move";
    				counter ++;
    				winner();
    			} else {
    				$(this).css("color", "#3498db").css("fontFamily", "sans-serif").css("fontSize", "25px");
    				$(this).text("X");
    				turn.innerHTML = "O's Move";
    				counter ++;
    				winner();
    			} 
    		}

	    })

	//Reset button
	$("#end").click(function() {
			$(".square").removeClass("X").removeClass("O").text(""); 
			$("#turn").text("X's Move");
			counter = 1;
	})
})