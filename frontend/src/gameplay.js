const newGameButton = document.getElementById("newgame")
const attackButton = document.getElementById("attack")
const endTurnButton = document.getElementById("endturn")
const map = document.getElementById("worldmap")


newGameButton.addEventListener("click", renderMap)

function renderMap(){
   let imgsrc = "/Users/jesse/Desktop/war/frontend/images/world-map.jpg"
   map.src = imgsrc
}

attackButton.addEventListener("click", attack)

function attack(event){
    event.preventDefault()
   let value = event.toElement.form.elements[0].options.selectedIndex 
        if (value == 0) {
	        console.log("please try again");
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


