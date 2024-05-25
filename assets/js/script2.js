// ----------------- Global variables section below -----------------








// ----------------- Functions section below -----------------


fetch('https://api.positionstack.com/v1/forward? access_key=ec3c837ab8d9eaa67a161607890ea491', {
  // The browser fetches the resource from the remote server.
  // The browser will find the users location based on a location identifier(i.e city, state, long, lat or IP Address).
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data1) {
    console.log(data1);
  });

  
  const createUserLocation = function(data1) {
    const userLocationContainer = document.createElement('div')
    const userLocationTitle = document.createElement('h3')
    const userLocationCity = document.createElement('p')
    // Maybe const userLongitude = document.createElement('p')
    // Maybe const userLatitude = document.createElement('p')  

//Put the value pull from the location API here.
    userLocationTitle
    userLocationCity
    // userLongitude
    // userLatitude

// Set attribute section for all elements inside the creatuserlocation container.
    userLocationContainer.append(userLocationTitle, userLocationCity, userEventSuggestion)

  }

  createUserLocation();
// Calling User Location Function


  
  fetch('GET https://api.predicthq.com/v1/events HTTP/1.1 Accept: application/json Authorization: dxKKKuK5-dI $dzguvnsi5sFnOMIG7JAnu6MqNZ__5XmXJjhkxa2QRBCxFAAP7fVTXg', {
    // The browser fetches the event data from the API.
    // The browser will then update the application with new data.

  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data2) {
      console.log(data2);
    });

    const createUserEvent = function(data2) {
        const eventContainer = document.createElement('div');
        const eventTitle = document.createElement('h2');
        const eventType = document.createElement('h4');

//Put the value pull from the location API here.
        eventTitle
        eventType

// Appending the grapped values to the event container div.
        eventContainer.append(eventTitle, eventTitle);
    }

    createUserEvent();
// This function will fetch and event an display it based on ther users interests.






const createEventSuggestion = function(data1, data2) {

}
  //   This will be the function that creates the user event suggestions based on the user's interests and location.

createEventSuggestion();
// This will call the create user event function.








// ----------------- Event listener section below-----------------









