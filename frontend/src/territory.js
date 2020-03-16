class Territory {
    static all =[]

    constructor(name){
        this.name = name
        Territory.all.push(this)  
    }


}

function fetchTerritories() {
    return fetch("http://127.0.0.1:3000/continents")
      .then(res => res.json())
      .then(json => createTerritories(json))
  }

  function createTerritories(json){
    json.forEach(function(x){
        let y = new Territory(x.name)
    }
    )}