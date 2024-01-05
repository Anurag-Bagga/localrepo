let userScore = 0;
let compScore = 0;

let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");

let userWin = true;
let msg = document.querySelector("#msg");
let msgCont = document.querySelector(".msg-cont");

let choices = document.querySelectorAll(".choice");

const rcompChoice = () => {
    const allChoices = ["rock","paper","sicssors"];
    const rndIndx = Math.floor(Math.random() * 3);
    return allChoices[rndIndx];
}

let drawGame = () =>{
    msg.innerText = "Draw game";
    msg.style.backgroundColor = "#081b31";
}

let showWinner = (userWin,userchoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `cong your ${userchoice} beats ${compChoice} of comp`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `sorry your ${userchoice} lose to ${compChoice} of comp`;
        msg.style.backgroundColor = "red";
    }
}

function playGame(userchoice){
    const compChoice = rcompChoice();
    if(compChoice === userchoice){
        drawGame();
    }
    else if(userchoice == "rock"){
        userWin = compChoice === "paper" ? false : true;
    }
    else if(userchoice == "paper"){
        userWin = compChoice === "sicssors" ? false : true;
    }
    else{
        userWin = compChoice === "rock" ? false : true;
    }
    if(userchoice != compChoice){
        showWinner(userWin,userchoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});