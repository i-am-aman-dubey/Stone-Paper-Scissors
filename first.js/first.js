let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawgame = () => {
  msg.innerText = "game was draw.play again";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userchoice, compchoice) => {
  if (userWin) {
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = `you lose. your ${compchoice} beats ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  const compchoice = gencompchoice();

  if (userchoice === compchoice) {
    drawgame();
  } else {
    let userWin = true;
    if (userchoice === "rock") {
      userWin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userWin = compchoice === "scissors" ? false : true;
    } else {
      userWin = compchoice === "rock" ? false : true;
    }
    showWinner(userWin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("Id");

    playgame(userchoice);
  });
});

///git version contro
//helllog
