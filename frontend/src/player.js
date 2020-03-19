document.addEventListener('DOMContentLoaded', fetchPlayers)

class Player {

    static all =[]

    constructor (name) {
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

function postPlayer(player) {
        
        configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(player)
        } 
    //     // debugger
    //    return fetch("http://127.0.0.1:3000/users", configObj)
    //             .then(res)
    //             console.log(res)
    //             .then(json => {console.log(json)})
    //             .catch(function(error) {
    //                 alert("Trouble Connecting to the server");
    //                 console.log(error.message);
    //               })

}