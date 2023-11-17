let result = document.querySelector(".result");
let yourScore = document.querySelector("#my-score");
let machineScore = document.querySelector("#my-machine");

let humanScore = 0;
let scoreMachine = 0;

const color ={
	red: 'red',
	blue: 'blue',
	green:'green'
}

/**
Aplicando ENUM 
**/
const GAMER_OPTIONS ={
	ROCK:'rock',
	PAPER:'paper',
	SCISSORS:'scissors'
}

const playHuman = (humanChoise) => {
	playGame(humanChoise, playMachine());
};

const playMachine = () => {
	const choise = [GAMER_OPTIONS.ROCK, GAMER_OPTIONS.PAPER, GAMER_OPTIONS.SCISSORS];
	const randomNumber = Math.floor(Math.random() * 3);

	console.log(randomNumber);

	return choise[randomNumber];
};

const playGame = (human, machine) => {
	console.log("Humano: " + human + "\n" + "Maquina: " + machine);

	if (human === machine) {
		result.innerHTML = "Empate";
		result.style.backgroundColor = color.red;
		
	} else if (
		(human === GAMER_OPTIONS.PAPER && machine === GAMER_OPTIONS.ROCK) ||
		(human === GAMER_OPTIONS.ROCK && machine === GAMER_OPTIONS.SCISSORS) ||
		(human === GAMER_OPTIONS.SCISSORS && machine === GAMER_OPTIONS.PAPER)
	) {
        humanScore++;
		yourScore.innerHTML = humanScore;
		result.innerHTML = "Voce ganhou";
	} else {
        scoreMachine++;
        machineScore.innerHTML = scoreMachine;
		result.innerHTML = "Alexia ganhou";
	}
};
