// ----------------- Global variables section below -----------------

const searchBtn = document.getElementById('search-button');
const cityList = document.getElementById('city-list');
const eventType = document.getElementById('event-type');
const fetchAPIButton = document.getElementById('fetch-api-button');


// ----------------- Functions section below -----------------

  // Fetches & renders Chuck Norris Jokes
  const createRandomJoke = function(data) {

    // Here is the url with the  different categories. We can decide which we want https://api.chucknorris.io/jokes/categories
    fetch('https://api.chucknorris.io/jokes/random?category=history,dev,money,sport,science,animal', {
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.value);
    const jokeContainer = document.createElement('div')
    const jokeEl = document.createElement('p');
    const actualJokeContainer = document.getElementById('joke-container')

    jokeEl.textContent = data.value;
    jokeEl.setAttribute('style', 'color: black');

    jokeContainer.append(jokeEl);
    actualJokeContainer.appendChild(jokeContainer);
  });
} 

createRandomJoke();


// ----------------- Event listener section below-----------------

// Event listener for html landing page search button.
searchBtn.addEventListener('click', function() {
  const modal = document.getElementById('exModal');
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
});

// Saves user's selections to local storage & goes on to the next page of the site
fetchAPIButton.addEventListener('click', function() {
  const citySelection = cityList.value;
  const eventSelection = eventType.value;

  localStorage.setItem('citySelection', citySelection);
  localStorage.setItem('eventSelection', eventSelection);

  window.location.href = '/index2.html'
})









