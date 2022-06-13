//player switch turns
let playerTurn = true
let turn = 0
let boxFilled = [true, true, true, true, true, true, true, true, true]
const gameFlow = ["playerx", "playero", "playerx", "playerx", "playero", "playerx", "playero", "playerx", "playero"]
let gameWinner = false

// Call all the cells
let winner = document.getElementById("winner")
let grid = document.getElementsByClassName("grid")
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let b4 = document.getElementById("b4")
let b5 = document.getElementById("b5")
let b6 = document.getElementById("b6")
let b7 = document.getElementById("b7")
let b8 = document.getElementById("b8")
let b9 = document.getElementById("b9")

//let playerToken = document.getElementById("gameFlow")
console.log(gameWinner)
// set the event listeners
b1.addEventListener('click', function (event) {
    if (winner.innerText != "Player 1 has won!" && (gameWinner != true) || "Player 2 has won!" && (gameWinner != true)) {
        console.log(gameWinner)
        if (boxFilled[0] === true) {
            if (playerTurn === true) {
                b1.innerText = ("X")
                playerTurn = false
            } else if (playerTurn === false) {
                b1.innerText = ("0")
                playerTurn = true
            }
            turn = turn + 1
            boxFilled[0] = false
            checkWin()
        }
    }
}
)

b2.addEventListener('click', function (event) {
    if (winner.innerText != "Player 1 has won!" && (gameWinner != true) || "Player 2 has won!" && (gameWinner != true)) {
        if (boxFilled[1] === true) {
            if (playerTurn === true) {
                b2.innerText = ("X")
                playerTurn = false
            } else if (playerTurn === false) {
                b2.innerText = ("0")
                playerTurn = true
            }
            turn = turn + 1
            boxFilled[1] = false
            checkWin()
        }
    }
}
)

b3.addEventListener('click', function (event) {
    if (winner.innerText != "Player 1 has won!" && (gameWinner != true) || "Player 2 has won!" && (gameWinner != true)) {
        if (boxFilled[2] === true) {
            if (playerTurn === true) {
                b3.innerText = ("X")
                playerTurn = false
            } else if (playerTurn === false) {
                b3.innerText = ("0")
                playerTurn = true
            }
            turn = turn + 1
            boxFilled[2] = false
            checkWin()
        }
    }
}
)

b4.addEventListener('click', function (event) {
    if (winner.innerText != "Player 1 has won!" && (gameWinner != true) || "Player 2 has won!" && (gameWinner != true)) {
        if (boxFilled[3] === true) {
            if (playerTurn === true) {
                b4.innerText = ("X")
                playerTurn = false
            } else if (playerTurn === false) {
                b4.innerText = ("0")
                playerTurn = true
            }
            turn = turn + 1
            boxFilled[3] = false
            checkWin()
        }
    }
}
)

b5.addEventListener('click', function (event) {
    if (winner.innerText != "Player 1 has won!" && (gameWinner != true) || "Player 2 has won!" && (gameWinner != true)) {
        if (boxFilled[4] === true) {
            if (playerTurn === true) {
                b5.innerText = ("X")
                playerTurn = false
            } else if (playerTurn === false) {
                b5.innerText = ("0")
                playerTurn = true
            }
            turn = turn + 1
            boxFilled[4] = false
            checkWin()
        }
    }
}
)

b6.addEventListener('click', function (event) {
    if (winner.innerText != "Player 1 has won!" && (gameWinner != true) || "Player 2 has won!" && (gameWinner != true)) {
        if (boxFilled[5] === true) {
            if (playerTurn === true) {
                b6.innerText = ("X")
                playerTurn = false
            } else if (playerTurn === false) {
                b6.innerText = ("0")
                playerTurn = true
            }
            turn = turn + 1
            boxFilled[5] = false
            checkWin()
        }
    }
}
)

b7.addEventListener('click', function (event) {
    if (winner.innerText != "Player 1 has won!" && (gameWinner != true) || "Player 2 has won!" && (gameWinner != true)) {
        if (boxFilled[6] === true) {
            if (playerTurn === true) {
                b7.innerText = ("X")
                playerTurn = false
            } else if (playerTurn === false) {
                b7.innerText = ("0")
                playerTurn = true
            }
            turn = turn + 1
            boxFilled[6] = false
            checkWin()
        }
    }
}
)

b8.addEventListener('click', function (event) {
    if (winner.innerText != "Player 1 has won!" && (gameWinner != true) || "Player 2 has won!" && (gameWinner != true)) {
        if (boxFilled[7] === true) {
            if (playerTurn === true) {
                b8.innerText = ("X")
                playerTurn = false
            } else if (playerTurn === false) {
                b8.innerText = ("0")
                playerTurn = true
            }
            turn = turn + 1
            boxFilled[7] = false
            checkWin()
        }
    }
}
)

b9.addEventListener('click', function (event) {
    if (winner.innerText != "Player 1 has won!" && (gameWinner != true) || "Player 2 has won!" && (gameWinner != true)) {
        if (boxFilled[8] === true) {
            if (playerTurn === true) {
                b9.innerText = ("X")
                playerTurn = false
            } else if (playerTurn === false) {
                b9.innerText = ("0")
                playerTurn = true
            }
            turn = turn + 1
            boxFilled[8] = false
            checkWin()
        }
    }
}
)

// Check for a winner
function checkWin() {
    if (b1.innerText != "" && b1.innerText === b2.innerText && b1.innerText === b3.innerText ||
        b4.innerText != "" && b4.innerText === b5.innerText && b4.innerText === b6.innerText ||
        b7.innerText != "" && b7.innerText === b8.innerText && b7.innerText === b9.innerText ||
        b1.innerText != "" && b1.innerText === b4.innerText && b1.innerText === b7.innerText ||
        b2.innerText != "" && b2.innerText === b5.innerText && b2.innerText === b8.innerText ||
        b3.innerText != "" && b3.innerText === b6.innerText && b3.innerText === b9.innerText ||
        b1.innerText != "" && b1.innerText === b5.innerText && b1.innerText === b9.innerText ||
        b3.innerText != "" && b3.innerText === b5.innerText && b3.innerText === b7.innerText
    ) {
        if (playerTurn == true) {
            winner.innerText = "Player 2 has won!"
            gameWinner = true
        } else {
            winner.innerText = "Player 1 has won!"
            gameWinner = true
        }

        //winnerH1.innerText = "Player ${} has won!"
        //console.log("Winner, Winner, Chicken Dinner!")
    } else if (turn === 9) { document.getElementById("winner").innerText = "It's a Tie. Click Restart Game to play again!" }

    // if (turn === 9) {
    // document.getElementById("winner").innerText = "It's a Tie. Click Restart Game to play again!"
    if (turn === 1) {
        document.getElementById("playerturn").innerText = "Player 2 Turn"
    } if (turn === 2) {
        document.getElementById("playerturn").innerText = "Player 1 Turn"
    } if (turn === 3) {
        document.getElementById("playerturn").innerText = "Player 2 Turn"
    } if (turn === 4) {
        document.getElementById("playerturn").innerText = "Player 1 Turn"
    } if (turn === 5) {
        document.getElementById("playerturn").innerText = "Player 2 Turn"
    } if (turn === 6) {
        document.getElementById("playerturn").innerText = "Player 1 Turn"
    } if (turn === 7) {
        document.getElementById("playerturn").innerText = "Player 2 Turn"
    } if (turn === 8) {
        document.getElementById("playerturn").innerText = "Player 1 Turn"
    }
}

// function endGame () {
//     if (b1.innerText != "" && b1.innerText === b2.innerText && b1.innerText === b3.innerText ||
//         b4.innerText != "" && b4.innerText === b5.innerText && b4.innerText === b6.innerText ||
//         b7.innerText != "" && b7.innerText === b8.innerText && b7.innerText === b9.innerText ||
//         b1.innerText != "" && b1.innerText === b4.innerText && b1.innerText === b7.innerText ||
//         b2.innerText != "" && b2.innerText === b5.innerText && b2.innerText === b8.innerText ||
//         b3.innerText != "" && b3.innerText === b6.innerText && b3.innerText === b9.innerText ||
//         b1.innerText != "" && b1.innerText === b5.innerText && b1.innerText === b9.innerText ||
//         b3.innerText != "" && b3.innerText === b5.innerText && b3.innerText === b7.innerText
//     ) { 
//         b1.removeEventListener('click', function true ())
//         b2.removeEventListener('click', endGame())
//         b3.removeEventListener('click', endGame())
//         b4.removeEventListener('click', endGame())
//         b5.removeEventListener('click', endGame())
//         b6.removeEventListener('click', endGame())
//         b7.removeEventListener('click', endGame())
//         b8.removeEventListener('click', endGame())
//         b9.removeEventListener('click', endGame())
//     }
// }

// Restart Button
restart.addEventListener('click', function (event) {
    location.reload()
    // b1.innerText = ""
    // b2.innerText = ""
    // b3.innerText = ""
    // b4.innerText = ""
    // b5.innerText = ""
    // b6.innerText = ""
    // b7.innerText = ""
    // b8.innerText = ""
    // b9.innerText = ""
    // player count
    // winner
    // tie
})



