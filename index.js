let player = {
    name : "Mayowa",
    chips : 10
}
let cards = [random(), random()]
let message = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sum = document.getElementById("sum-el")
let isAlive = true
let hasBlackJack = false
let game = cards[0] + cards[1]
let playerEl = document.getElementById("player-El")
playerEl.textContent = player.name + ": $" + player.chips


function random(){
    let randonNum = Math.floor(Math.random() * 13) + 1
    if (randonNum === 1){
        return 11
    } else if (randonNum > 10){
        return 10
    } else{
        return randonNum
    }
}

function startGame(){
    playerEl.textContent = player.name + ": $" + (player.chips - 2)
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    if (game <= 20){
        message.textContent = "Do you want to draw another card?"
        sum.textContent = "Sum: " + game
    } else if(game === 21){
        message.textContent = "You have won a Blackjack"
        sum.textContent = "Sum: " + game
        hasBlackJack = true
    } else{
        message.textContent = "You have lost the game"
        sum.textContent = "Sum: " + game
        isAlive = false
    }
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        cards.push(random())
        game += cards[2]
        cardsEl.textContent += ", " + cards[2]
        renderGame()
    }
    else{
        message.textContent = "You can't draw a new card, start a new game?"
    }
}
