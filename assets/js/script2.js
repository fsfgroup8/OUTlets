// // ----------------- Global variables section below -----------------
// searchBtn = document.getElementById('search-button');
// ageRange = document.getElementById('age-range');
// cityList = document.getElementById('city-list1');
// hobbyList = document.getElementById('hobby-list1');
// eventType = document.getElementById('event-type');
// The variables for the removeEventListenerlevant for input areas and submit button

// Much of this is a suggestion. Many of the already existing interactive elements have not been passed in yet.

// // const form = 
// // document.getElementById('activity-form');
// This will create a variable to reference the form itself and activity form
// // const activitiesList =
// // document.getElementById('activities-list');
// This variable will reference back to the activity list id.
// // form.addEventListener('submit', async(e) => {
// //   e.preventDefault();
// This will set an event listener for the submit button and create an event that will prevent the default clearing of the form.
// //   const location = document.getElementById('location').value;
// This will reference the input for location and grab the value the user enters.
// //   const activityType =
// //   document.getElementById('activity-type').value;
// This will reference the input for activity type and grab value the user enters.

//   const url = 'https://api.seatgeek.com/2'
//   const apiKey = 'efd618d723ac9af1b3cb310dd19590338cd98b5bd32204a2e633c7bdcfb2f5f9'
//   const clientId = 'NDE4MTc1OTZ8MTcxNjY2OTE4NC43MTg5Nw'
//   const events = 'events'
//   const qURL = `${url}/${events}?client_id=${clientId}`
  
//   const headers = {
//     'X-API-Key': apiKey,
//   };
  
//   const options = {
//     method: 'GET',
//     headers: headers,
//   };
  
  
//   // ----------------- Functions section below -----------------
//  This will grab the api info we desire. Pass in the api key info and create a header variable to store that info then create a options variable to store the GET Method itself 
  
//   fetch(qURL, options)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// This will log the info gathered and convert it to JSON after verifying there are no errors in retrieval. If there are errors the relevant message will show aka status.
// })
// Below might be redundant since it does some of the things the above does.
// // const response=await fetch(https://api.example.com/activities?location=${location}&type=${activityType});
// I am setting a await api fetch that waits for the user input before making the request.
// // const data=await response.json();
// I am giving the response a variable of data and then converting it to JSON after the response is returned.
// // activitiesList.innerHTML="";
// I am setting a empty string to recieve the response
// // data.forEach(activity => {
    // I am saying I want to iterate through each item in the array and preform an operation on each object.
// //   const activityElement.innerHTML = document.createElement('div');
// I am creating a div element to store the returned location and activity type data.
// //   activityElement.innerHTML = 
// This will create an activity element in the div.
// //     <h2>${activity.name}</h2>
// This will then create an h2 element with the returned activity name data.
// //     <p>${activity.description}</p>;
// This will create a p element which will have the activity description inside.
// // });
// // });


// // const createEventCard = function() {

// //     // Potential values to grab from API
// //     // Is put the syntax based on the key value address in the data object
// //     // events.title
// //     // events.type
// //     // events.venue
// //     // events.venue.city
// //     // events.venue.postal_code
//This was the location of various key value pairs found within the seat geek data object we returned.

// //     // Or geolocation data
// //     // events.location.state
// //     // events.venue.city
// //     // events.venue.postal_code
// //     // events.location.lat & lon
// //     // IP Address
// This is the location of various key value pairs relative to geolocation found within the seat geek object we returned.
// //     // if(eventLocation && eventType) {console.log(createEventCard)}
// //     // else {console.log('no events found')};

// //     // I am thinking this could be the beginning of the conditional logic to verify event type and location

// //     const eventContainer = document.createElement('.divContainer');
// //     const eventCard = document.createElement('div');
// //     const eventTitle = document.createElement('h1');
// //     const eventType = document.createElement('h3');
// //     const eventCity = document.createElement('h3');
// //     const eventZip = document.createElement('h3');
// //     const eventVenue = document.createElement('h3');
// // ``
// This was the initial idea to create elements from returned api data. Might be irrelevant at this point.
// //     eventContainer.append(eventTitle, eventType, eventZip, eventVenue);
// // }

// // createEventCard();


// // // ----------------- Event listener section below-----------------









