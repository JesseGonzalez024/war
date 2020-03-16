const newGameButton = document.getElementById("newgame")
const attackButton = document.getElementById("attack")
const endTurnButton = document.getElementById("endturn")


newGameButton.addEventListener("click", startgame)

function startgame(){
    renderMap()

}




function renderMap(){
    const map = document.getElementById("worldmap")
    let imgsrc = "/Users/jesse/Desktop/war/frontend/images/world-map.jpg"
    map.src = imgsrc
}

attackButton.addEventListener("click", attack)

function attack(event){
    event.preventDefault()
//    let value = event.toElement.form.elements[0].options.selectedIndex 
    let attacker = event.toElement.form.elements[0].selectedOptions[0].label
    let defender = event.toElement.form.elements[1].selectedOptions[0].label

    Territory.fetchTerritories()
    debugger
        if (value == 0) {
	        alert("please try again");
        } else if (value == 1 ) {
	        console.log("North america");
        }
        else if (value == 2 ) {
	        console.log("South America");
        }
        else if (value == 3 ) {
	        console.log("Africa");
        }
        else if (value == 4 ) {
	        console.log("Europe");
        }
        else if (value == 5 ) {
	        console.log("Asia");
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



