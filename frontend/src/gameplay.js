const newGameButton = document.getElementById("newgame")
const attackButton = document.getElementById("attack")
const endTurnButton = document.getElementById("endturn")

newGameButton.addEventListener("click", startgame)
attackButton.addEventListener("click", attack)
endTurnButton.addEventListener("click", handleTurnEnd)


function startgame(){
    renderMap()
    Territory.fetchTerritories()
}

function renderMap(){
    const map = document.getElementById("worldmap")
    let imgsrc = "/Users/jesse/Desktop/war/frontend/images/world-map.jpg"
    map.src = imgsrc
}

function attack(event){
    event.preventDefault()
    let attacker = event.toElement.form.elements[0].selectedOptions[0].label
    let defender = event.toElement.form.elements[1].selectedOptions[0].label
    
    verifyWinner(attacker, defender)
}


function verifyWinner(attacker, defender){

    let result = diceRoll()

    if (result == true) {
        Territory.findLocation(defender)
        console.log("We won")
    } else if (result === false) {
        Territory.findLocation(attacker)
        console.log("Loser")
    }
}

function diceRoll(){  
    let player = Math.floor(Math.random() * 6 + 1)
    let pc = Math.floor(Math.random() * 6 + 1)
    let playerdice = document.getElementById("playerdice")
    let oppdice = document.getElementById("oppdice")
    playerdice.innerHTML = player
    oppdice.innerHTML = pc

    if (player > pc ){
        alert("You win this round adn your opponent has lost a troop!")
        return true
    }
    else if (player < pc ){
        alert("You've lost this round and 1 troop!")
        return false
    }
}

function handleTurnEnd(){
    // If player selects to end turn
    // a post method is sent to the back end with a turn count + 1
}


