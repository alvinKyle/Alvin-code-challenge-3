// Your code here

let url ="http://localhost:3000/films"
document.addEventListener("DOMContentLoaded", async (event) => {
    const films = await getAllMovies()
    viewMoviePoster(films)
    movieTitles(films)
    

})
filmTitles()


function getAllMovies() {
    return fetch("http://localhost:3000/films", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
        .then(res => res.json())
        .then(films => films)

}

const ul = document.getElementById("films")

function filmTitles() {
    return fetch("http://localhost:3000/films")
        .then(res => res.json())
        .then(title => title.map(movie => {
            let li = document.createElement("li")
            li.innerHTML = `
            <div>
            <h4 id="${movie.id}"class="movies">${movie.title}</h4>
            </div>`
            ul.appendChild(li)
        }))
    }

    function movieTitles(films){
      const mov = document.getElementById("showing")
      const pic = document.querySelectorAll(".movies")
      pic.forEach(action =>{
        action.addEventListener("click" , (event)=>{
          const film = films.find((element)=>element.id === event.target.id)
          mov.innerHTML = `
          <div class="card">
                <div id="title" class="title">${film.title}</div>
                <div id="runtime" class="meta">${film.runtime} minutes</div>
                <div class="content">
                  <div class="description">
                    <div id="film-info">${film.description}</div>
                    <span id="showtime" class="ui label">${film.showtime}</span>
                    <span id="ticket-num">${film.capacity - film.tickets_sold}</span> remaining tickets
                  </div>
                </div>
                <div class="extra content">
                  <button id="buy-ticket" class="ui orange button">
                    Buy Ticket
                  </button>
                </div>
              </div>
          `
        })
      })
    }
    



    function viewMoviePoster(films){
  const card = document.querySelector('#photo')
  const box = document.createElement('div')
 const view = document.querySelectorAll(".movies")
 view.forEach(movieposters =>{
  movieposters.addEventListener('click',(event)=>{
    //console.log(event.target.id)
    const foundfilm = films.find((element)=>element.id === event.target.id)
    box.innerHTML =`
    <img src=${foundfilm.poster}>`
    card.appendChild(box)
  })
 })
}

