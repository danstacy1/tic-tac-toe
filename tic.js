//player switch turns
let playerTurn = true
//let canPlay = false
//let turn = 0
let truthArray = (true, true, true, true, true, true, true, true, true) 
const gameFlow = ["playerx", "playero","playerx", "playerx", "playero", "playerx", "playero", "playerx", "playero"]
 
// game flow alternating object
//let turnIndicator = playerX, playerO

//const unclaimedColor= "rgb(173,13,217)"

// const gameOverColor = "rgb(255,255,255)"

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
    console.log(event.target)
    if (truthArray[0] === true) {
        if (playerTurn === true) {
        b1.innerText = ("X")
        playerTurn = false
     } else if (playerTurn === false) {
        b1.innerText = ("0")
        playerTurn = true
     }
        truthArray [0] = false
    }
})






// b2.addEventListener('click', function (event) {
// })
// b3.addEventListener('click', function (event) {
// })
// b4.addEventListener('click', function (event) {
// })
// b5.addEventListener('click', function (event) {
// })
// b6.addEventListener('click', function (event) {
// })
// b7.addEventListener('click', function (event) {
// })
// b8.addEventListener('click', function (event) {
// })
// b9.addEventListener('click', function (event) {
// })

// const turnAlternator = () => {
//     if (gameFlow[] === "playerx") {
//         playerToken.innerText = "Player 2 Turn"
//     } else if (gameFlow[1] === "playero") {
//         playerToken.innerText = "Player 1 Turn"
//     }
//     //turn += 1
// }

// const tiedGame = () => {
//     if (turns > 9) {
//         tiedText = document.querySelector('h2').innerText = "Game Tied! Restart game to play again."
//     }
// }


// //Trying to make the restart button work
// let restartButton = document.querySelector("#Restart")
// restartButton.addEventListener('click', function () {
//     // a1.style.backgroundColor = unclaimedColor
//     console.log("restart")
// })



