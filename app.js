


function play(playerChoice) {

  var rockurl = "https://intelexual.co/home/wp-content/uploads/2017/01/crack-rock.jpg"

  var paperurl = "https://th.bing.com/th/id/R.ec4793e24a08a4a7cca07c12b44a6388?rik=Fk1ccAEEdgsc4g&pid=ImgRaw&r=0"

  var scissorsurl = "https://gamepedia.cursecdn.com/infestationnewz_gamepedia_en/6/61/Shank.png"

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
  else if (playerChoice == 'scissors' && computerChoice == 'scissors') {
    var winlose = "You Tied"
  }
  if (computerChoice == 'rock') {
    document.getElementById("img").innerHTML = `<img class="img fluid rounded" src ="${rockurl}"
  alt = "rock">`
  }

  if (computerChoice == 'paper') {
    document.getElementById("img").innerHTML = `<img class="img fluid rounded" src ="${paperurl}"
  alt = "paper">`
  }

  if (computerChoice == 'scissors') {
    document.getElementById("img").innerHTML = `<img class="img fluid rounded" src ="${scissorsurl}"
  alt = "scissors">`
  }

  document.getElementById("winnloss").textContent = winlose

  document.getElementById("cplay").textContent = computerChoice
}