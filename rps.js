const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
const result_p = document.querySelector(".results > p");

function getComputerChoice() {
 const choices = ['r','p','s'];
 const randomNumber = (Math.floor(Math.random() * 3));
 return choices[randomNumber];
}

function converttoWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissor";
}


function win(userChoice, computerChoice) {
  result_p.innerHTML = converttoWord(userChoice) + " " + " beats " + " " + converttoWord(computerChoice) + ". You Win!"
}
function lose(userChoice, computerChoice) {
  result_p.innerHTML = result_p.innerHTML = converttoWord(userChoice) + " " + " loses to " + " " + converttoWord(computerChoice) + ". You Lost!"

}

function draw( userChoice, computerChoice) {
  result_p.innerHTML = converttoWord(userChoice) + " " + " is the same as " + " " + converttoWord(computerChoice)  + ". It's a Draw!"
}


function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }

  }

main();

function main() {
rock_div.addEventListener('click', function() {
  game("r");

})

paper_div.addEventListener('click', function() {
  game("p");

})

scissor_div.addEventListener('click', function() {
 game("s");

})
}
