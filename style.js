let buttons = document.querySelectorAll(".btn");
let finalresult = document.getElementById("result");
let userscore = document.getElementById("userscore");
let cmpscore = document.getElementById("cmpscore");
let drawcount = document.getElementById("draw");
var cmpwin = 0;
var userwin = 0;

var draw=0 ;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = gameplay(button.id, computermove());
    finalresult.innerHTML = result;
    userscore.innerHTML = ` Your score:${userwin}`;
    cmpscore.innerHTML = `computer score:${cmpwin}`;
   
        drawcount.innerHTML = `draw count: ${draw}`;
    
  });
});

function computermove() {
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoice = ["Rock", "Paper", "scissors"];
  return computerChoice[randomNumber];
}
function gameplay(playerchoice, cmpchoice) {
  if (playerchoice === cmpchoice) {
       draw++;
   
     
     return  result = " It's a draw! Play again";
  } 
  
  
  else if (
    (playerchoice === "Rock" && cmpchoice === "scissors") ||
    (playerchoice === "Paper" && cmpchoice === "Rock") ||
    (playerchoice === "scissors" && cmpchoice === "Paper")
  ) 
  
  {
     userwin = ++userwin;
     return result = `YOU WIN! ${playerchoice} beats ${cmpchoice}`;
  } 
  
  
  else {
    
     cmpwin = ++cmpwin;
     return  result = ` You lose!${playerchoice} lose to ${cmpchoice} Play Again`;
  }
}
