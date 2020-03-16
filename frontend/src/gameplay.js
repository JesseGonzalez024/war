const newGameButton = document.getElementById("newgame")
const attackButton = document.getElementById("attack")
const endTurnButton = document.getElementById("endturn")

newGameButton.addEventListener("click", startgame)

function startgame(){
    renderMap()
    Territory.fetchTerritories()
}




function renderMap(){
    const map = document.getElementById("worldmap")
    let imgsrc = "/Users/jesse/Desktop/war/frontend/images/world-map.jpg"
    map.src = imgsrc
}

attackButton.addEventListener("click", attack)

function attack(event){
    event.preventDefault()
    let attacker = event.toElement.form.elements[0].selectedOptions[0].label
    let defender = event.toElement.form.elements[1].selectedOptions[0].label
    
    verifyWinner(attacker, defender)
}



function verifyWinner(attacker, defender){
    let result = winner()
    
    debugger
    if (result == true) {
        // debugger
        console.log("We won")
        Territory.findLoser(defender)
        // reduce troops from deffender 
    } else if (result === false) {
        // debugger
        // reduce troops from player 
        console.log("Loser")
        Territory.findLoser(attacker)
    }
}

function winner(){  
    let player = Math.floor(Math.random() * 6 + 1)
    let pc = Math.floor(Math.random() * 6 + 1)
    let playerdice = document.getElementById("playerdice")
    let oppdice = document.getElementById("oppdice")
    playerdice.innerHTML = player
    oppdice.innerHTML = pc

    if (player > pc ){
        alert("You win this round!")
        return true
    }
    else if (player < pc ){
        alert("You've lost this round!")
        return false
    }
}



