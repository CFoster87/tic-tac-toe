const gameState = {
    players: ['o', 'x'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
}

let currentPlayer =  gameState.players[0]


function displayBoard() {
    const spaces = document.getElementById("game-board");

  
    for (let items of gameState.board) {
        for (let i in gameState.board) {
      const space = document.createElement("button");
      space.innerText = items[i];
      space.onclick = clickBox;
      spaces.appendChild(space);
        }
    }
  }

displayBoard()


function beginGame() {
    let player1 = document.getElementById("p1name").value
    let player2 = document.getElementById("p2name").value
    document.getElementById("player-field").style.display = "none"
    document.getElementById("active-players").style.display = "flex"
    document.getElementById("current-player").style.display = "flex"
    document.getElementById("game-board").style.display = "grid"


   
    if (Math.floor(Math.random()*3) === 1) {
        gameState.players[0] = player1
        gameState.players[1] = player2
    }

    else {
        gameState.players[0] = player2
        gameState.players[1] = player1
    }

    document.getElementById("player-one").innerText = "Ohs: " + gameState.players[0]
    document.getElementById("player-two").innerText = "Exes: " + gameState.players[1]
    currentPlayer =  gameState.players[0]
    document.getElementById("current-player").innerText = "It's your turn, " + gameState.players[0] + "!"
}




function clickBox() {
    if (currentPlayer === gameState.players[0]) {
        // this.innerText = "O";
        this.style.backgroundColor = "#fa7007"
        this.style.fontSize = "150px"
        currentPlayer = gameState.players[1]
        document.getElementById("current-player").innerText = "It's your turn, " + gameState.players[1] + "!"
    }
    
    else {
        // this.innerText = "X"
        this.style.backgroundColor = "#c32b42"
        this.style.fontSize = "150px"
        currentPlayer = gameState.players[0]
        document.getElementById("current-player").innerText = "It's your turn, " + gameState.players[0] + "!"
    }
    this.disabled = true;
    checkWin()

  }

  function checkWin() {
    for (rows of gameState.board) {
        // console.log(rows)
        for (let i in gameState.board) {
            // console.log([i])
            

            }
        }
    
  }
