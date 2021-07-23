const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const userPick = document.querySelector(".user-section img");
const userPad = document.querySelector(".user-section");
const compPick = document.querySelector(".computer-section img");
const compPad = document.querySelector(".computer-section");
const indication = document.querySelector(".indication h2");
let compScoreIndic = document.querySelector(".computer-score h2");
let userScoreIndic = document.querySelector(".user-score h2");
let timerIndic = document.querySelector(".timer h2");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

let user;
let enemy;
let timer5 = 3;

let userScore = 0;
let compScore = 0;

rock.addEventListener("click", () => {
	user = 1;
	if (user == 1) {
		userPick.src = "img/rock.png";
	}
	rock.disabled = true;
	paper.disabled = true;

	scissor.disabled = true;
	compPick.style.transform = "rotate(0deg)";
	compPick.src = "img/question-mark.png";
	timer();
});
paper.addEventListener("click", () => {
	user = 2;
	if (user == 2) {
		userPick.src = "img/paper.png";
	}
	rock.disabled = true;
	paper.disabled = true;

	scissor.disabled = true;
	compPick.style.transform = "rotate(0deg)";

	compPick.src = "img/question-mark.png";

	timer();
});
scissor.addEventListener("click", () => {
	user = 3;
	if (user == 3) {
		userPick.src = "img/scissor.png";
	}
	rock.disabled = true;
	paper.disabled = true;

	scissor.disabled = true;
	compPick.style.transform = "rotate(0deg)";

	compPick.src = "img/question-mark.png";

	timer();
});

let clock;

function timer() {
	userPad.style.transform = "translateY(0px)";
	compPad.style.transform = "translateY(0px)";
	userPick.style.transform = "rotate(-90deg)";

	clock = setInterval(function () {
		if (timer5 == 3) {
			timerIndic.innerHTML = "BATO";
			userPad.style.transform = "translateY(-50px)";
			compPad.style.transform = "translateY(50px)";
			first.style.display = "block";
		} else if (timer5 == 2) {
			timerIndic.innerHTML = "BATO";
			userPad.style.transform = "translateY(0px)";
			compPad.style.transform = "translateY(0px)";
			second.style.display = "block";
		} else if (timer5 == 1) {
			timerIndic.innerHTML = "PICK";
			userPad.style.transform = "translateY(-50px)";
			compPad.style.transform = "translateY(50px)";
			third.style.display = "block";
		}
		timer5 -= 1;

		if (timer5 == -1) {
			stopTimer();
			computerPick();
		}
	}, 1000);
}

function stopTimer() {
	first.style.display = "none";
	second.style.display = "none";
	third.style.display = "none";
	userPad.style.transform = "translateY(0px)";
	compPad.style.transform = "translateY(0px)";
	clearTimeout(clock);
	timer5 = 3;
	rock.disabled = false;
	paper.disabled = false;

	scissor.disabled = false;
}

function computerPick() {
	enemy = Math.floor(Math.random() * 3 + 1);
	compPick.style.transform = "rotate(90deg)";
	if (enemy == 1) {
		compPick.src = "img/rock.png";
	} else if (enemy == 2) {
		compPick.src = "img/paper.png";
	} else {
		compPick.src = "img/scissor.png";
	}
	verdict();
}

function verdict() {
	if (user == 1 && enemy == 2) {
		indication.innerHTML = "DEFEAT";
		compScoreIndic.innerHTML = compScore + 1;
		compScore++;
	} else if (user == 2 && enemy == 1) {
		indication.innerHTML = "YOU WIN";
		userScoreIndic.innerHTML = userScore + 1;
		userScore++;
	} else if (user == 1 && enemy == 3) {
		indication.innerHTML = "YOU WIN";
		userScoreIndic.innerHTML = userScore + 1;
		userScore++;
	} else if (user == 3 && enemy == 1) {
		indication.innerHTML = "DEFEAT";
		compScoreIndic.innerHTML = compScore + 1;
		compScore++;
	} else if (user == 2 && enemy == 3) {
		indication.innerHTML = "DEFEAT";
		compScoreIndic.innerHTML = compScore + 1;
		compScore++;
	} else if (user == 3 && enemy == 2) {
		indication.innerHTML = "YOU WIN";
		userScoreIndic.innerHTML = userScore + 1;
		userScore++;
	} else {
		indication.innerHTML = "Tie";
	}
}

first.style.display = "none";
second.style.display = "none";
third.style.display = "none";
