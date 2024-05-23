fetch('https://api.positionstack.com/v1/forward? access_key = ec3c837ab8d9eaa67a161607890ea491', {
  // The browser fetches the resource from the remote server.
  // The browser will then update new created element jokeEl with the downloaded resource.
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });