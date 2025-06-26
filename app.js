let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice")
const userScoreMessage = document.querySelector("#userScore");
const computerScoreMessage = document.querySelector("#compScore");
const playMessage = document.querySelector("#msg");



const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random()*3);
    return options[randIndex];
}

const drawGame = () => {
    console.log("The game was a draw !")
    playMessage.textContent = "It's a draw !"
}

const showWinner = (userWin,userChoice,computerChoice)=>{
    if(userWin){
        console.log("You win! ");
        playMessage.innerText=`Damnn !You win this round ! \n Your ${userChoice} beats ${computerChoice}`;
        playMessage.style.backgroundColor="green";
        userScore++;
        userScoreMessage.textContent = `${userScore}`    }
    else{
        console.log("Computer wins this round !")
        playMessage.innerText=`Shitt ! You lose this round ! \n Computer's ${computerChoice} beats ${userChoice}`;
        playMessage.style.backgroundColor="red";
        computerScore++;
        computerScoreMessage.textContent = `${computerScore}`
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});

const playGame = (userChoice)=>{
    console.log("User's Choice is :",userChoice);
    const computerChoice = genCompChoice();
    console.log("Computer's Choice is :",computerChoice);
    if(userChoice===computerChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = computerChoice==="paper"? false:true;
        }
        else if(userChoice=="paper"){
            userWin = computerChoice==="scissors"? false:true;
        }
        else{
            userWin = computerChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
}

