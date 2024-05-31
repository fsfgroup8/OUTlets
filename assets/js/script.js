// // ----------------- Global variables section below -----------------

const searchBtn = document.getElementById('search-button');
const cityList = document.getElementById('city-list');
const eventType = document.getElementById('event-type');
const fetchAPIButton = document.getElementById('fetch-api-button');


// // ----------------- Functions section below -----------------



  const createRandomJoke = function(data) {
    fetch('https://api.chucknorris.io/jokes/random', {
  // The browser fetches the resource from the remote server.
  // The browser will then update new created element jokeEl with the downloaded resource.
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.value);
    const jokeContainer = document.createElement('div')
    const jokeEl = document.createElement('p');
    const actualJokeContainer = document.getElementById('joke-container')
    // Add the values to snatch from the API object to deliver random joke will go below this comment.
    jokeEl.textContent = data.value;
    jokeEl.setAttribute('style', 'color: black');

    jokeContainer.append(jokeEl);
    actualJokeContainer.appendChild(jokeContainer);
  });
}



  createRandomJoke();



// // ----------------- Event listener section below-----------------

// // Event listener for html landing page search button.
searchBtn.addEventListener('click', function() {
  const modal = document.getElementById('exModal');
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
});


fetchAPIButton.addEventListener('click', function() {
  const citySelection = cityList.value;
  const eventSelection = eventType.value;

  localStorage.setItem('citySelection', citySelection);
  localStorage.setItem('eventSelection', eventSelection);

  window.location.href = '/index2.html'
})

