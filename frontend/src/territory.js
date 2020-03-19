let offensive = document.getElementById("offensive")
let defensive = document.getElementById("defensive")

class Territory {
    
    static all =[]

    constructor(name){
        this.troops = 2
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
          })
      }

      static renderTerritories() {
         let player = Player.all[0]
         player.territories = Territory.all.slice(0, 3) 
        player.territories.forEach(function(t){
            let element =  document.createElement("option")
            element.value = `${t.name}`
            element.innerHTML = `${t.name}`
            offensive.appendChild(element)
        })

        Territory.all.slice(2, -1).forEach(function(t){
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
                element.zeroTroops()
                return element
            }
        })
      }

      zeroTroops() {
          if (this.troops === 0){
            let player = Player.all[0]
            // Player.all has no value. Buttin new game clicked before player instance created
            player.territories.push(this)
            Player.listTerritories()
            allTerritories(player)
          }
      }
}
