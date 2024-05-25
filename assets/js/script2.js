// ----------------- Global variables section below -----------------








// ----------------- Functions section below -----------------


  // The browser fetches the resource from the remote server.
  // The browser will find the users location based on a location identifier(i.e city, state, long, lat or IP Address).

//   const createUserLocation = function(data1) {
//     const userLocationContainer = document.createElement('div')
//     const userLocationTitle = document.createElement('h3')
//     const userLocationCity = document.createElement('p')
//     // Maybe const userLongitude = document.createElement('p')
//     // Maybe const userLatitude = document.createElement('p')  The syntax error is likely occurring because the template literal ${} syntax is not being used correctly in the qURL variable assignment. 


const url = 'https://api.seatgeek.com/2'
const apiKey = 'efd618d723ac9af1b3cb310dd19590338cd98b5bd32204a2e633c7bdcfb2f5f9'
const clientId = 'NDE4MTc1OTZ8MTcxNjY2OTE4NC43MTg5Nw'
const events = 'events'
const qURL = `${url}/${events}?client_id=${clientId}`

const headers = {
  'X-API-Key': apiKey,
};

const options = {
  method: 'GET',
  headers: headers,
};

fetch(qURL, options)
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Error:', error);
});


// //Put the value pull from the location API here.
//     userLocationTitle
//     userLocationCity
//     // userLongitude
//     // userLatitude

// // Set attribute section for all elements inside the creatuserlocation container.
//     userLocationContainer.append(userLocationTitle, userLocationCity, userEventSuggestion)

//   }

//   createUserLocation();
// // Calling User Location Function


  
//   fetch('GET https://api.predicthq.com/v1/events HTTP/1.1 Accept: application/json Authorization: dxKKKuK5-dI $dzguvnsi5sFnOMIG7JAnu6MqNZ__5XmXJjhkxa2QRBCxFAAP7fVTXg', {
//     // The browser fetches the event data from the API.
//     // The browser will then update the application with new data.

//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data2) {
//       console.log(data2);
//     });

//     const createUserEvent = function(data2) {
//         const eventContainer = document.createElement('div');
//         const eventTitle = document.createElement('h2');
//         const eventType = document.createElement('h4');

// //Put the value pull from the location API here.
//         eventTitle
//         eventType

// // Appending the grapped values to the event container div.
//         eventContainer.append(eventTitle, eventTitle);
//     }

//     createUserEvent();
// // This function will fetch and event an display it based on ther users interests.






// const createEventSuggestion = function(data1, data2) {

// }
//   //   This will be the function that creates the user event suggestions based on the user's interests and location.

// createEventSuggestion();
// // This will call the create user event function.








// // ----------------- Event listener section below-----------------









