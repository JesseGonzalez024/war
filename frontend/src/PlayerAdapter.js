class PlayerAdapter {
    

    newplayerUrl = "http://127.0.0.1:3000/users/new"

    constuctor (newPlayerUrl, editPlayerUrl) {
        this.newPlayerUrl = newPlayerUrl
        this.editPlayerUrl = editPlayerUrl
    }
    
    static fetchPlayers() {
        return fetch("http://127.0.0.1:3000/users")
        .then(resp => resp.json())
        .then(json => PlayerAdapter.renderPlayers(json));
    }
    
    static renderPlayers(json) {
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

    static handleUsername(event) {

        event.preventDefault()
        let username = event.srcElement.form.elements[0].value
        let player = new Player(username)
        player.postPlayer()
    
    }

}