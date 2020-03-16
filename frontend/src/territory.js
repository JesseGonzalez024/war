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
            })
          })

      }

      

    // Hard code .id into each element.
    // Getter and setter method for troops.
    // Every time a battle is simulated the amount of troops per territory is reduced by one.
}