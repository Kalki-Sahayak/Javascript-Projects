let userScore = 0; 
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");

const genCompChoice = () =>{
    let options =["rock", "scissors", "paper"]
    return options[Math.floor(Math.random()*3)];
}

const showWinner = (userWin, userChoice, CompChoice) => {
    if (userWin)
    {
        userScore++;
        user.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        CompScore++;
        comp.innerText = CompScore;
        msg.innerText = `You lose! ${CompChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () =>{
    msg.innerText = "The game was a Draw. Play Again!"
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice)=>{
    const CompChoice = genCompChoice();

    if (userChoice === CompChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = CompChoice === "paper"? false : true;
        }else if (userChoice === "paper"){
            userWin = CompChoice === "scissors"? false : true;
        }else{
            userWin = CompChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, CompChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})