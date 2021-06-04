// document.querySelector("startOver").addEventListener("click", Restart);

let userChoice;
let userScore = 0;
let compScore = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");


const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const choices = {
    0: "rock",
    1: "paper",
    2: "scissors",
    3: "lizard",
    4: "spock"
}

function getCompChoice(){
    let choice = Math.floor(Math.random()*5);
    return choices[choice];
}


function main(){

    rock.addEventListener('click', function(){
        userChoice = "rock";
        game(userChoice, getCompChoice());
        });
    paper.addEventListener('click', function(){
        userChoice = "paper";
        game(userChoice, getCompChoice());
        });
    scissors.addEventListener('click', function(){
        userChoice = "scissors";
        game(userChoice, getCompChoice());
        });
    lizard.addEventListener('click', function(){
        userChoice = "lizard";
        game(userChoice, getCompChoice());
        });
    spock.addEventListener('click', function(){
        userChoice = "spock";
        game(userChoice, getCompChoice());    
    });

}

const startOver = document.getElementById("start-over");
startOver.addEventListener('click', function(){
    //  window.location.reload();
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    document.getElementById('result').innerHTML = "Make your move";
    return userScore, compScore;
});

function game(userChoice, compChoice){
    
    console.log(compScore);
    console.log(userScore);

    let userSelection = String(userChoice);
    let compSelection = String(compChoice);
    
    function win(userChoice, compChoice) {
        userScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        document.getElementById(userSelection).classList.add("winner");
        document.getElementById(compSelection).classList.add("loser");
        setTimeout(() => document.getElementById(userSelection).classList.remove("winner"), 800);
        setTimeout(() => document.getElementById(compSelection).classList.remove("loser"), 800);
    }
    
    function lose(userChoice, compChoice) {
        compScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        document.getElementById(userSelection).classList.add("loser");
        document.getElementById(compSelection).classList.add("winner");
        setTimeout(() => document.getElementById(userSelection).classList.remove("loser"), 800);
        setTimeout(() => document.getElementById(compSelection).classList.remove("winner"), 800);
    }
    
    function draw(userChoice, compChoice) {
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        document.getElementById(userSelection).classList.add("draw");
        document.getElementById(compSelection).classList.add("draw");
        setTimeout(() => document.getElementById(userSelection).classList.remove("draw"), 800);
        setTimeout(() => document.getElementById(compSelection).classList.remove("draw"), 800);
    }

        //scissors cuts paper
    if (compSelection == "scissors" && userChoice == "paper"){
            document.getElementById('result').innerHTML = "Scissors cuts paper. You lose!";
            lose();
        } else if (compChoice == "paper" && userChoice == "scissors"){
            document.getElementById('result').innerHTML = "Scissors cuts paper. You win!";
            win();
        //paper covers rock
        } else if (compChoice == "paper" && userChoice == "rock"){
            document.getElementById('result').innerHTML = "Paper covers rock. You lose!";
            lose();
        } else if(compChoice == "rock" && userChoice == "paper"){
            document.getElementById('result').innerHTML = "Paper covers rock. You win!";
            win();
        //rock crushes lizard
        } else if (compChoice == "rock" && userChoice == "lizard"){
            document.getElementById('result').innerHTML = "Rock crushes lizard. You lose!";
            lose();
        } else if (compChoice == "lizard" && userChoice == "rock"){
            document.getElementById('result').innerHTML = "Rock crushes lizard. You win!";
            win();
        //lizard poisons spock
        } else if (compChoice == "lizard" && userChoice == "spock"){
            document.getElementById('result').innerHTML = "Lizard poisons Spock. You lose!";
            lose();
        } else if (compChoice == "spock" && userChoice == "lizard"){
            document.getElementById('result').innerHTML = "Lizard poisons Spock. You win!";
            win();
        //spock smashes scissors
        } else if (compChoice == "scissors" && userChoice == "spock"){
            document.getElementById('result').innerHTML = "Spock smashes scissors. You lose!";
            lose();
        } else if (compChoice == "spock" && userChoice == "scissors"){
            document.getElementById('result').innerHTML = "Spock smashes scissors. You win!";
            win();
        //scissors decapitates lizard
        } else if (compChoice == "scissors" && userChoice == "lizard"){
            document.getElementById('result').innerHTML = "Scissors decapitates lizard. You lose!";
            lose();
        } else if (compChoice == "lizard" && userChoice == "scissors"){
            document.getElementById('result').innerHTML = "Scissors decapitates lizard. You win!";
            win();
        //lizard eats paper
        } else if (compChoice == "lizard" && userChoice == "paper"){
            document.getElementById('result').innerHTML = "Lizard eats paper. You lose!";
            lose();
        } else if (compChoice == "paper" && userChoice == "lizard"){
            document.getElementById('result').innerHTML = "Lizard eats paper. You win!";
            win();
        //paper disproves spock
        } else if (compChoice == "paper" && userChoice == "spock"){
            document.getElementById('result').innerHTML = "Paper disproves Spock. You lose!";
            lose();
        } else if (compChoice == "spock" && userChoice == "paper"){
            document.getElementById('result').innerHTML = "Paper disproves Spock. You win!";
            win();
        //spock vaporizes rock
        } else if (compChoice == "spock" && userChoice == "rock"){
            document.getElementById('result').innerHTML = "Spock vaporizes rock. You lose!";
            lose();
        } else if (compChoice == "rock" && userChoice == "spock"){
            document.getElementById('result').innerHTML = "Spock vaporizes rock. You win!";
            win();
        //rock crushes scissors
        } else if (compChoice == "rock" && userChoice == "scissors"){
            document.getElementById('result').innerHTML = "Rock crushes scissors. You lose!";
            lose();
        } else if (compChoice == "scissors" && userChoice == "rock"){
            document.getElementById('result').innerHTML = "Rock crushes scissors. You win!";
            win();
        //draw
        } else {
            document.getElementById('result').innerHTML = "Draw";
            draw();
        };
}


main();


