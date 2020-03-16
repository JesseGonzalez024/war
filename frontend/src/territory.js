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


      static findLoser(loser) {
        Territory.all.find(function(x) {
            x.name == loser           
            if (element.name === loser){
                console.log("Found it")
            }

        })
      }

}