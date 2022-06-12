//player switch turns
let playerTurn = true
let turn = 0
let boxFilled = [true, true, true, true, true, true, true, true, true] 
const gameFlow = ["playerx", "playero","playerx", "playerx", "playero", "playerx", "playero", "playerx", "playero"]
 
// game flow alternating object
// let turnIndicator = playerX, playerO

//const unclaimedColor= "rgb(173,13,217)"

//const gameOverColor = "rgb(255,255,255)"

//const restart = document.querySelector("#restart")

// Call all the cells
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

// set the event listeners
b1.addEventListener('click', function (event) {
    if (boxFilled[0] === true) {
        if (playerTurn === true) {
            b1.innerText = ("X")
            playerTurn = false
        }   else if (playerTurn === false) {
            b1.innerText = ("0")
            playerTurn = true
        }
        turn = turn +1
        boxFilled [0] = false
    }
})

b2.addEventListener('click', function (event) {
    if (boxFilled[1] === true) {
        if (playerTurn === true) {
            b2.innerText = ("X")
            playerTurn = false
        }   else if (playerTurn === false) {
            b2.innerText = ("0")
            playerTurn = true
        }
        turn = turn +1
        boxFilled [1] = false
    }
})

b3.addEventListener('click', function (event) {
    if (boxFilled[2] === true) {
        if (playerTurn === true) {
            b3.innerText = ("X")
            playerTurn = false
        }   else if (playerTurn === false) {
            b3.innerText = ("0")
            playerTurn = true
        }
        turn = turn +1
        boxFilled [2] = false
    }
})

b4.addEventListener('click', function (event) {
    if (boxFilled[3] === true) {
        if (playerTurn === true) {
            b4.innerText = ("X")
            playerTurn = false
        }   else if (playerTurn === false) {
            b4.innerText = ("0")
            playerTurn = true
        }
        turn = turn +1
        boxFilled [3] = false
    }
})
b5.addEventListener('click', function (event) {
    if (boxFilled[4] === true) {
        if (playerTurn === true) {
            b5.innerText = ("X")
            playerTurn = false
        }   else if (playerTurn === false) {
            b5.innerText = ("0")
            playerTurn = true
        }
        turn = turn +1
        boxFilled [4] = false
    }
})
b6.addEventListener('click', function (event) {
    if (boxFilled[5] === true) {
        if (playerTurn === true) {
            b6.innerText = ("X")
            playerTurn = false
        }   else if (playerTurn === false) {
            b6.innerText = ("0")
            playerTurn = true
        }
        turn = turn +1
        boxFilled [5] = false
    }
})
b7.addEventListener('click', function (event) {
    if (boxFilled[6] === true) {
        if (playerTurn === true) {
            b7.innerText = ("X")
            playerTurn = false
        }   else if (playerTurn === false) {
            b7.innerText = ("0")
            playerTurn = true
        }
        turn = turn +1
        boxFilled [6] = false
    }
})
b8.addEventListener('click', function (event) {
    if (boxFilled[7] === true) {
        if (playerTurn === true) {
            b8.innerText = ("X")
            playerTurn = false
        }   else if (playerTurn === false) {
            b8.innerText = ("0")
            playerTurn = true
        }
        turn = turn +1
        boxFilled [7] = false
    }
})
b9.addEventListener('click', function (event) {
    if (boxFilled[8] === true) {
        if (playerTurn === true) {
            b9.innerText = ("X")
            playerTurn = false
        }   else if (playerTurn === false) {
            b9.innerText = ("0")
            playerTurn = true
        }
        turn = turn +1
        boxFilled [8] = false
    }
})

// Check for a winner
function checkWin (){
    if (b1.innerText != "" && b1.innerText === b2.innerText && b1.innerText === b3.innerText ||
        b4.innerText != "" && b4.innerText === b5.innerText && b4.innerText === b6.innerText ||
        b7.innerText != "" && b7.innerText === b8.innerText && b7.innerText === b9.innerText ||
        b1.innerText != "" && b1.innerText === b4.innerText && b1.innerText === b7.innerText ||
        b2.innerText != "" && b2.innerText === b5.innerText && b2.innerText === b8.innerText ||
        b3.innerText != "" && b3.innerText === b6.innerText && b3.innerText === b9.innerText ||
        b1.innerText != "" && b1.innerText === b5.innerText && b1.innerText === b9.innerText ||
        b3.innerText != "" && b3.innerText === b5.innerText && b3.innerText === b7.innerText
    ){
        document.getElementById("winner").innerText = "Player ${} has won!"
        console.log("Winner, Winner, Chicken Dinner!")

    }
        if (turn === 9) {
            document.getElementById("winner").innerText = "It's a Tie. Click Restart Game to play again!"
        }
}


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



