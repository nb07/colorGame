// *** COLOR GAME ***
// *** Neil Bishop ***
// *** 12/05/2017

// *** Variables ***
	//number of squares
	var numSquares = 6;
	//Array of Colors
	var colors = [];
	//color to be chosen.
	var pickedColor;
	//squares
	var squares = document.querySelectorAll(".square");
	//color displayed
	var colorDisplay = document.getElementById("colorDisplay");
	//message displayed
	var messageDisplay = document.querySelector("#message");
	//to change the h1 to the chosen color when won. 
	var h1 = document.querySelector("h1");
	//New colors button.
	var resetButton = document.querySelector("#reset");
	//Hard & Easy Buttons.
	var modeButtons = document.querySelectorAll(".mode");

// *** INITIAL FUNCTION ***
	
	init();

	function init(){
		// *** Buttons ***
		setupModeButtons();
		// *** Squares *** 
		setupSquares();
		// *** Reset ***
		reset();
	}

// *** Reset Button
	resetButton.addEventListener("click", function(){
		reset();
	});

// *** Functions ***

	function setupSquares(){
		// *** Loop to give colors to squares. *** 
			for(i = 0; i < squares.length; i++){
			//add click listeners to squares
			squares[i].addEventListener("click", function(){
				//grab color of clicked square
				var clickedColor = this.style.backgroundColor;
				//compare color to pickedColor.
				if(clickedColor === pickedColor){
					//if matched then Correct
					messageDisplay.textContent = "Correct";
					resetButton.textContent = "Play Again?"
					//change color function
					changeColors(clickedColor);
					h1.style.backgroundColor = pickedColor;
				}
				else {
					//if not matched then Wrong
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Try Again";
				}
			});
		}
	}

	function setupModeButtons(){
	//loop to move through modeButtons
		for(i = 0; i < modeButtons.length; i++){
			//addEventListener to the modeButtons
			modeButtons[i].addEventListener("click", function(){
				//unselects button
				modeButtons[0].classList.remove("selected");
				//unselects button			
				modeButtons[1].classList.remove("selected");
				//this is refering to modeButtons. 
				//selection is added to the button selected.
				this.classList.add("selected");
				// *** TERNARY OPERATOR ***
				//if modbuttons are === "Easy", then numSquares = 3, if not then = 6
				this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
				reset();
			});
		}
	}

	function reset(){
		//generate all new colors
		colors = generateRandomColors(numSquares);
		//pick a new random color from array
		pickedColor = pickColor();
		//change colorDisplay to match picked color
		colorDisplay.textContent = pickedColor;
		//this refers to resetButton. Changes to "New Colors"
		resetButton.textContent = "New Colors";
		//messageDisplay is reset to blank
		messageDisplay.textContent = "";
		//change colors of squares
		for(i = 0; i < squares.length; i++){
			//if there is a current color
			if(colors[i]){
				//turn squares back on.
				squares[i].style.display = "block"
				//then squares is given a color.
				squares[i].style.backgroundColor = colors[i];
			}
			//else turn square off.
			else {
				squares[i].style.display = "none";
			}
		}
		h1.style.backgroundColor = "steelblue";
	}

	function changeColors(color){
		//loop through all squares
		for(i = 0; i < squares.length; i++){
			//change each color to match given color
			squares[i].style.backgroundColor = color;
		}
	}

	function pickColor(){
		//math.floor is the whole number version of the math.random numbers.
		//this is multiplied to the length of the array. 
		//this then saves the random number to a variable.
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}

	function generateRandomColors(num){
		//make array
		var arr = [];
		//repeat num times
		for(i = 0; i < num; i++){
			//get random color and push into arr
			arr.push(randomColor());
		}
		//return array
		return arr;
	}

	function randomColor(){
		//pick a "red" from 0 - 255
		var r = Math.floor(Math.random() * 256);
		//pick a "green" from 0 - 255
		var g = Math.floor(Math.random() * 256);
		//pick a "blue" from 0 - 255
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}

// *** SCRATCH ***
	
	// // *** Easy Btn ***
	// 	easyBtn.addEventListener("click", function(){
	// 		//turning easy btn to look "selected"
	// 		hardBtn.classList.remove("selected");
	// 		//turning hard btn off
	// 		easyBtn.classList.add("selected");
	// 		//setting numSquares to 3
	// 		numSquares = 3;
	// 		//colors is an array with 3 elements
	// 		colors = generateRandomColors(numSquares);
	// 		//puts the new pickedColor into square
	// 		pickedColor = pickColor();
	// 		//changes display to new pickedColor
	// 		colorDisplay.textContent = pickedColor;
	// 		//loop through the 3 item array of colors.
	// 		for(i = 0; i < squares.length; i++){
	// 			//if there is a color.
	// 			if(colors[i]){
	// 				//change color of square to new random color.
	// 				squares[i].style.backgroundColor = colors[i];
	// 			} 
	// 			else {
	// 				squares[i].style.display = "none";
	// 			}
	// 		}
	// 	});

	// // *** Hard Btn ***
	// 	hardBtn.addEventListener("click", function(){
	// 		//turning hard btn to look "selected"
	// 		hardBtn.classList.add("selected")
	// 		//turning easy btn off
	// 		easyBtn.classList.remove("selected")
	// 		//setting numSquares to 6
	// 		numSquares = 6;
	// 		//colors is an array with 3 elements
	// 		colors = generateRandomColors(numSquares);
	// 		//puts the new pickedColor into square
	// 		pickedColor = pickColor();
	// 		//changes display to new pickedColor
	// 		colorDisplay.textContent = pickedColor;
	// 		//loop through the 3 item array of colors.
	// 		for(i = 0; i < squares.length; i++){
	// 			//array of colors is given to the squares
	// 			squares[i].style.backgroundColor = colors[i];
	// 			//squares are turned back on
	// 			squares[i].style.display = "block";
	// 		}
	// 	});

	// // *** Reset Button
	// resetButton.addEventListener("click", function(){
	// 	//generate all new colors
	// 	colors = generateRandomColors(numSquares);
	// 	//pick a new random color from array
	// 	pickedColor = pickColor();
	// 	//change colorDisplay to match picked color
	// 	colorDisplay.textContent = pickedColor;
	// 	//this refers to resetButton. Changes to "New Colors"
	// 	this.textContent = "New Colors";
	// 	//messageDisplay is reset to blank
	// 	messageDisplay.textContent = "";
	// 	//change colors of squares
	// 	for(i = 0; i < squares.length; i++){
	// 		squares[i].style.backgroundColor = colors[i];
	// 	}
	// 	h1.style.backgroundColor = "steelblue";
	// });