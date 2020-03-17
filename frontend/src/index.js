// Full Encapsulation

// const territoryAdapter = new TerritoryAdapter("http://127.0.0.1:3000/continents")
// const playerAdapter = new PlayerAdapter("http://127.0.0.1:3000/users")

const usernamesubmit = document.getElementById("usernamesubmit")
usernamesubmit.addEventListener("click", PlayerAdapter.handleUsername) 



newplayerUrl = "http://127.0.0.1:3000/users/new"


document.addEventListener('DOMContentLoaded', PlayerAdapter.fetchPlayers)


