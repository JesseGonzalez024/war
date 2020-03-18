class Territory {
    
    static all =[]

    constructor(name){
        this.troops = 10
        this.name = name
        Territory.all.push(this)  
    }

    static fetchTerritories() {
        return fetch("http://127.0.0.1:3000/continents")
          .then(res => res.json())
          .then(json => {
            json.forEach(function(x){
                let y = new Territory(x.name)
                return Territory.all
            })
            Territory.renderTerritories()
            .catch(function(error) {
                alert("Trouble Connecting to the server");
                console.log(error.message);
              })
          })
      }

      static renderTerritories() {
        Territory.all.forEach(function(t){
            let element =  document.createElement("option")
            element.value = `${t.name}`
            element.innerHTML = `${t.name}`
            offensive.appendChild(element)
        })
        Territory.all.forEach(function(t){
            let element =  document.createElement("option")
            element.value = `${t.name}`
            element.innerHTML = `${t.name}`
            defensive.appendChild(element)
        })
      }

      static findLocation(territory) {
          let x = territory
        Territory.all.find(function(element) { 
            if (element.name == x ) {
                element.troops -= 1
                alert(`${element.name} has ${element.troops} left!`)
                return element
            }
        })
      }

      zeroTroops() {
          if (this.troops === 0){
            let player = Player.all[0]
            player.territories.push(this)


            allTerritories(player)
          }
      }
}

let offensive = document.getElementById("offensive")
let defensive = document.getElementById("defensive")