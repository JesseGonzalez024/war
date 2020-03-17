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
    

    postPlayer() {
        configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this)
        } 

        fetch("http://127.0.0.1:3000/users/new", confifObj) 
        .then(function(response) {
        return response.json();
        })
        .then(function(object) {
        console.log(object);
        })

    }
}

