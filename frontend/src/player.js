class Player {

    static all =[]

    constructor (name) {
        this.name = name
        this.territories = []
        this.turnCount = 0
        Player.all.push(this)
    }

    addTroops(){
        this.territories.forEach(function(t){
            t.troops += 1
        })
    }

    static renderPlayer() {
        usernamesubmit.style.display = "none"
        let usernameinput = document.getElementById("username")
        username.style.display = "none"
        let player = Player.all[0]
        let divtag = document.getElementById("playerstatus")
        let turntag = document.createElement("h6")
        turntag.innerHTML = `${player.turnCount}`
        divtag.appendChild(turntag)
    }

    static listTerritories() {
        let ultag = document.getElementById("territorylist")
        let player = Player.all[0]
        player.territories.forEach(function(t) {
            let litag = document.createElement("li")
            litag.innerHTML = `${t.name}`
            ultag.appendChild(litag)
        })

    }
}

const usernamesubmit = document.getElementById("usernamesubmit")
usernamesubmit.addEventListener("click", handleUsername) 

function handleUsername(event) {
    const htag = document.getElementById("intro")
    event.preventDefault()
    let username = event.srcElement.form.elements[0].value
    let player = new Player(username)
    htag.innerText = `${player.name}`
    Player.renderPlayer()
    postPlayer(player)
}

function postPlayer (player) {
        
    configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(player)
    } 

    return fetch("http://127.0.0.1:3000/users", configObj) 
        .then(function(response) {
        return response.json();
        })
        .then(function(object) {
        console.log(object);
        })
        .catch(function(error) {
            alert("Could not Upload your username onto the database");
            console.log(error.message);
      })
}


