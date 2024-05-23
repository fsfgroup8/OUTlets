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

  
  fetch('GET https://api.predicthq.com/v1/events?phq_attendance.undefined=4500&category=politics HTTP/1.1 Accept: application/json Authorization: Bearer $pDEqATICrqDm36LtIs34vdH4G-Km8I0QemynrV5kaIBChmfIFdMig', {
    // The browser fetches the event data from the API.
    // The browser will then update the application with new data.

  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });

  const createUserLocation = function(data) {
    const userLocationContainer = document.createElement('div')
    const userLocationTitle = document.createElement('h3')
    const userLocationCity = document.createElement('h4')
    const userEventSuggestion = document.createElement('h4')
//Put the value pull from the location API here.
    userLocationTitle
    userLocationCity
    userEventSuggestion

// Set attribute section for all elements inside the creatuserlocation container.
    userLocationContainer.append(userLocationTitle, userLocationCity, userEventSuggestion)

  }

  createUserLocation();


  const createUserEvent = function() {

  }
//   This will be the function that creates the user event suggestions based on the user's interests and location.