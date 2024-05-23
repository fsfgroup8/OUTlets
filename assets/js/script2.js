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



  const createRandomJoke = function(data) {
    const jokeContainer = document.createElement('div')
    const jokeEl = document.createElement('p');
// Add the values to snatch from the API object to deliver random joke will go below this comment.
    jokeEl.textContent.categories[0].value('');
    jokeEl.setAttribute('style', 'color: black');

    jokeContainer.append(jokeEl);

  }

  createRandomJoke();