


function play(playerChoice) {

  let computeroptions = ['rock', 'paper', 'scissors']
  let computerdex = Math.floor(Math.random() * computeroptions.length)
  let computerChoice = computeroptions[computerdex]

  if (playerChoice == 'rock' && computerChoice == 'rock') {
    var winlose = "You Tied"
  }
  else if (playerChoice == 'paper' && computerChoice == 'rock') {
    var winlose = "You Win"
  }
  else if (playerChoice == 'scissors' && computerChoice == 'rock') {
    var winlose = "You Lose"
  }
  else if (playerChoice == 'rock' && computerChoice == 'paper') {
    var winlose = "You Lose"
  }
  else if (playerChoice == 'paper' && computerChoice == 'paper') {
    var winlose = "You Tied"
  }
  else if (playerChoice == 'scissors' && computerChoice == 'paper') {
    var winlose = "You Win"
  }
  else if (playerChoice == 'rock' && computerChoice == 'scissors') {
    var winlose = "You Win"
  }
  else if (playerChoice == 'paper' && computerChoice == 'scissors') {
    var winlose = "You Lose"
  }
  else if (playerChoice == 'scissors' && computerChoice == 'scissors')
    var winlose = "You Tied"

  document.getElementById("winnloss").textContent = winlose

  document.getElementById("cplay").textContent = computerChoice
}