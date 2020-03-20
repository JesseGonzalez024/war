class Player {

    static all =[]

    constructor (name) {
        this.id = 0
        this.name = name
        this.territories = []
        this.turnCount = 0
        Player.all.push(this)
    }

    addTroops() {
        this.territories.forEach(function(t){
            t.troops += 1
        })
        console.log("Your forces have been resupplied")
        alert("Your forces have been resupplied")
    }

    postPlayer = () => {
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this)
        }

        fetch("http://127.0.0.1:3000/users", configObj)
        .then(resp => resp.json())
        .then(json => Player.addId(json))
    }

    static addId(json) {
        let player = Player.all[0]
        player.id = json.id
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

        if (username.style.display = "none") {
            newGameButton.style.display = "initial"
        }
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

function handleUsername(event) {

    const htag = document.getElementById("intro")
    event.preventDefault()
    let username = event.srcElement.form.elements[0].value
    let player = new Player(username)
 
    htag.innerText = `${player.name}`
    Player.renderPlayer()
    player.postPlayer()

}

async function fetchPlayers() {
    const resp = await fetch("http://127.0.0.1:3000/users")
    const json = await resp.json()
    return renderPlayers(json)
}

function renderPlayers(json) {
   let nameone = document.getElementById('nameone')
    let nametwo = document.getElementById('nametwo')
    let namethree = document.getElementById('namethree')
    let countone = document.getElementById('countone')
    let counttwo = document.getElementById('counttwo')
    let countthree = document.getElementById('countthree')
    nameone.innerHTML = `${json[0].username}`
    countone.innerHTML = `${json[0].final_count}`
    nametwo.innerHTML = `${json[1].username}`
    counttwo.innerHTML = `${json[1].final_count}`
    namethree.innerHTML = `${json[2].username}`
    countthree.innerHTML = `${json[2].final_count}`     
}