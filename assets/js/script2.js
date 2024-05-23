fetch('https://api.chucknorris.io/jokes/random', {
  // The browser fetches the resource from the remote server without first looking in the cache.
  // The browser will then update the cache with the downloaded resource.
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });



  const createRandomJoke = function(data) {
    const jokeEl = document.createElement('div');
    
  }