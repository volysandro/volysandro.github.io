var key = "f4ea379a98e24e61bb00ffd45eea1826";
const searchBtn = document.getElementById("search")

searchBtn.addEventListener('click', E => {
    var searchStr = document.getElementById("searchDB").value
    search(searchStr)
})


function search (usrInput){

    fetch('https://api.themoviedb.org/3/search/multi?api_key=' + key + '&language=en-US&query=' + encodeURI(usrInput) + '&page=1&include_adult=false')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      data.results.forEach(element => {
          console.log(element)
          var card = document.createElement('div')
          card.className = "uk-card uk-card-body"
          document.getElementById("body").appendChild(card)

          cardTitle = document.createElement('h3')
          cardTitle.className = "uk-card-title"
          cardTitle.innerHTML = element.original_title
          card.appendChild(cardTitle)
      });
    })
    .catch(error => console.error(error))


}
