// // ----------------- Global variables section below -----------------

searchBtn = document.getElementById('search-button');
ageRange = document.getElementById('age-range');
cityList = document.getElementById('city-list1');
hobbyList = document.getElementById('hobby-list1');
eventType = document.getElementById('event-type');


// // ----------------- Event listener section below-----------------


searchBtn.addEventListener('click', function() {
console.log(searchBtn)
})



// const jokeDiv = document.getElementById('joke-div');


// // ----------------- Functions section below -----------------


fetch('https://api.chucknorris.io/jokes/random', {
  // The browser fetches the resource from the remote server.
  // The browser will then update new created element jokeEl with the downloaded resource.
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  const createRandomJoke = function(data2) {
    const jokeContainer = document.createElement('div')
    const jokeEl = document.createElement('p');
// Add the values to snatch from the API object to deliver random joke will go below this comment.
    jokeEl.data2.value;
    jokeEl.setAttribute('style', 'color: black');

    jokeContainer.append(jokeEl);

  }

  createRandomJoke();























