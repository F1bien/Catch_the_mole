



function gameFunction() {

	let id = null;

	var score = 0;

	const element_score = document.getElementById("score");

	element_score.innerHTML = "Point : " + score;

	const element_talpa = document.getElementById("talpa");

	setInterval(fineTempo, 10000);

	element_talpa.addEventListener('click', bonk);
	setInterval(fineTempo, 10000);

	play();

	//clearInterval(element_talpa);

	//setInterval(move, 5);


	function play() {

		clearInterval(id);

		move();

		id = setInterval(move, 3000);

	}

	function bonk() {

		clearInterval(id);
		move();
		id = setInterval(move, 3000);
		
		score++;
		
		element_score.innerHTML = "Point : " + score;


	}



	function move() {

		element_talpa.style.top = Math.floor(Math.random() * 400) + "px";

		element_talpa.style.left = Math.floor(Math.random() * 400) + "px"; 

	}



	function fineTempo() {
		clearInterval(id);
	}


}

