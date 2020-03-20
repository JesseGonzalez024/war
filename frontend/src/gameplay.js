const newGameButton = document.getElementById("newgame")
newGameButton.style.display = "none"

const attackButton = document.getElementById("attack")
const endTurnButton = document.getElementById("endturn")

newGameButton.addEventListener("click", startgame)
attackButton.addEventListener("click", attack)
endTurnButton.addEventListener("click", handleTurnEnd)

function startgame() {
    renderMap()
    Territory.fetchTerritories()
    postGame()
}

function renderMap(){
    const map = document.getElementById("worldmap")
    let imgsrc = "/Users/jesse/Desktop/war/frontend/images/world-map.jpg"
    map.src = imgsrc
}

function postGame() {
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(Player.all[0])
    }
    
    debugger
    fetch("http://127.0.0.1:3000/games", configObj)
          .then(res => res.json())
          .then(json => console.log(json))

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
        console.log("You won")
    } else if (result === false) {
        Territory.findLocation(attacker)
        console.log("You lost")
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
        alert("You win this round and your opponent has lost a troop!")
        return true
    }
    else if (player < pc ){
        alert("You've lost this round and 1 troop!")
        return false
    }
}

function handleTurnEnd(){
    event.preventDefault()
    let player = Player.all[0]
    player.turnCount += 1
    player.addTroops()
}

function allTerritories(player) {

    if (player.territories.length === 6 ) {
        alert("Congratulations, you now possess all possible Territories, you win!")
        weHaveAWinner(player)
    }
}

function weHaveAWinner(player){
    configObj = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(player)
            } 

            fetch(`http://127.0.0.1:3000/users/${player.id}`, configObj) 
                .then(function(response) {
                return response.json();
                })
                .then(function(object) {
                console.log(object);
                })
                .catch(function(error) {
                    alert("There has been an error uploading your info onto the database.");
                    console.log(error.message);
                  })
}





