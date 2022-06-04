const gameState = {
    players: ['o', 'x'],
    board: [0, 1, 2, 3 ,4, 5, 6, 7, 8]
}

let currentPlayer =  gameState.players[0]


function displayBoard() {
    const spaces = document.getElementById("game-board");

  
    for (let i in gameState.board) {
      const space = document.createElement("button");
      space.id = i;
      space.onclick = clickBox;
      spaces.appendChild(space);
      
    }
  }

displayBoard()


function beginGame() {
    let player1 = document.getElementById("p1name").value
    let player2 = document.getElementById("p2name").value

    if (player1 === "") {
        player1 = "Player"
    }
        
    if (player2 === "") {
        player2 = "Computer"
    }

    
    if (Math.floor(Math.random()*3) === 1) {
        gameState.players[0] = player1
        gameState.players[1] = player2
    }

    else {
        gameState.players[0] = player2
        gameState.players[1] = player1
    }

    if (gameState.players[0] === "Computer") {
        setTimeout(function(){
            computerTurn(gameState.board);
        },0500)
        
    }

    currentPlayer =  gameState.players[0]
    document.getElementById("player-field").style.display = "none"
    document.getElementById("active-players").style.display = "flex"
    document.getElementById("current-player").style.display = "flex"
    document.getElementById("new-game").style.display = "flex"
    document.getElementById("game-board").style.display = "grid"
    document.getElementById("player-one").innerText = "Ohs: " + gameState.players[0]
    document.getElementById("player-two").innerText = "Exes: " + gameState.players[1]
    document.getElementById("current-player").innerText = "It's your turn, " + gameState.players[0] + "!"
}




function clickBox() {
    if (currentPlayer === gameState.players[0]) {
        this.innerText = "O"
        gameState.board.splice(this.id, 1, "O")
        this.style.backgroundColor = "#FBD000"
        this.style.fontSize = "150px"
    }
    
    else {
        this.innerText = "X"
        gameState.board.splice(this.id, 1, "X")
        this.style.backgroundColor = "#43B047"
        this.style.fontSize = "150px"
    }
    this.disabled = true;
    checkWin()

  }

  function checkWin() {
      let remainingSpaces = []
        for (let elem of gameState.board) {
            if (elem !== "X" && elem !== "O") {
                remainingSpaces.push(elem)
            }
            
        }
    // Horizontal
        if (gameState.board[0] === gameState.board[1] && gameState.board[0] === gameState.board[2]) {
            winState(remainingSpaces)
        }

        else if (gameState.board[3] === gameState.board[4] && gameState.board[3] === gameState.board[5]) {
            winState(remainingSpaces)
        }

        else if (gameState.board[6] === gameState.board[7] && gameState.board[6] === gameState.board[8]) {
            winState(remainingSpaces)
        }

    // Verticle
        else if (gameState.board[0] === gameState.board[3] && gameState.board[0] === gameState.board[6]) {
            winState(remainingSpaces)
        }

        else if (gameState.board[1] === gameState.board[4] && gameState.board[1] === gameState.board[7]) {
            winState(remainingSpaces)
        }

        else if (gameState.board[2] === gameState.board[5] && gameState.board[2] === gameState.board[8]) {
            winState(remainingSpaces)
        }

    // Diagonal
        else if (gameState.board[0] === gameState.board[4] && gameState.board[0] === gameState.board[8]) {
            winState(remainingSpaces)
        }

        else if (gameState.board[2] === gameState.board[4] && gameState.board[2] === gameState.board[6]) {
            winState(remainingSpaces)
        }

        else if (remainingSpaces.length === 0) {
            document.getElementById("current-player").innerText = "It's a tie!"

        }

        else {
            switchPlayer()
        }
    }

    function switchPlayer() {
        if (currentPlayer === gameState.players[1]) {
            currentPlayer = gameState.players[0]
        }

        else if (currentPlayer === gameState.players[0]) {
            currentPlayer = gameState.players[1]
        }

        if (currentPlayer === "Computer") {
            setTimeout(function(){
                computerTurn(gameState.board);
            },0500)
        }

        document.getElementById("current-player").innerText = "It's your turn, " + currentPlayer + "!"

    }

    function newGame() {

        gameState.players = ['x', 'o']
        gameState.board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        currentPlayer = ''
        document.getElementById("player-field").style.display = "flex"
        document.getElementById("active-players").style.display = "none"
        document.getElementById("current-player").style.display = "none"
        document.getElementById("game-board").style.display = "none"
        document.getElementById("new-game").style.display = "none"
        for (let id of gameState.board) {
            resetButton(id)
        }        

    }


    function computerTurn(board) {
        let computerSelection = []

        for (let index of board) {
            if (index !== "O" && index !== "X") {
                computerSelection.push(index)
            }
        }
        let option = Math.floor(Math.random()*(computerSelection.length))
        let choice = computerSelection[option]
        document.getElementById(choice).click();
    }
    
    // Helper Functions

    function disableButton(buttons) {
        for (let elem of buttons) {
            document.getElementById(elem).disabled = true
        }
    }

    function resetButton(id) {
        document.getElementById(id).innerText = ''
        document.getElementById(id).style.backgroundColor = "#fff"
        document.getElementById(id).disabled = false
    }

    function winState(remainingSpaces) {
        document.getElementById("current-player").innerText = "You win, " + currentPlayer + "!"
        disableButton(remainingSpaces)
    }