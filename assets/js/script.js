// // ----------------- Global variables section below -----------------

searchBtn = document.getElementById('search-button');
ageRange = document.getElementById('age-range');
cityList = document.getElementById('city-list1');
hobbyList = document.getElementById('hobby-list1');
eventType = document.getElementById('event-type');
// I created variables for the relevant form inputs and submit button


// const jokeDiv = document.getElementById('joke-div');


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


// searchBtn.addEventListener('click', function() {
// console.log(searchBtn)
// })
searchBtn.addEventListener('click', function() {
  const modal = document.getElementById('exModal');
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
});
// // Event listener for html landing page search button.
// })