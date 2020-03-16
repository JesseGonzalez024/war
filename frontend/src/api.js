// Function to retrieve scoreboard leaders

document.addEventListener('DOMContentLoaded', fetchPlayers)


function fetchPlayers() {
    return fetch("http://127.0.0.1:3000/users")
    .then(resp => resp.json())
    .then(json => renderPlayers(json));
}

function renderPlayers(json) {
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