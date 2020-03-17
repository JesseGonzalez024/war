class Player {

    static all =[]

    constructor (name) {
        this.name = name
        this.territories = []
        Player.all.push(this)
    }

    weHaveAWinner(){
        if (this.territories.length == 6 ){
            // Callback function to post winner to Rails API database.
            postWinner()
        }
    }
}

const usernamesubmit = document.getElementById("usernamesubmit")
usernamesubmit.addEventListener("click", handleUsername) 

function handleUsername(event) {

    event.preventDefault()
    let username = event.srcElement.form.elements[0].value
    let player = new Player(username)
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

    fetch("http://127.0.0.1:3000/users", configObj) 
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



