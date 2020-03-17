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
          })
      }

      static findLocation(territory) {
          let x = territory
        Territory.all.find(function(element) { 
            if (element.name == x ) {
                element.troops -= 1
                return element
            }

        })
      }

      zeroTroops() {
          if (this.troops === 0){
            let index = Player.all.length - 1
            let player = Player.all[index]
            player.territories.push(this)
          }
      }

}