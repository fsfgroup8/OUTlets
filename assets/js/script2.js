// // ----------------- Global variables section below -----------------

const url = 'https://api.seatgeek.com/2'
const apiKey = 'efd618d723ac9af1b3cb310dd19590338cd98b5bd32204a2e633c7bdcfb2f5f9'
const clientId = 'NDE4MTc1OTZ8MTcxNjY2OTE4NC43MTg5Nw'
const events = 'events'
const perPage = '200'
// cant seem to use venues without their unique IDs
const venues = 'venues';

const qURL = `${url}/${events}?per_page=${perPage}&client_id=${clientId}`;

// Added a div in HTML2 for events-list 
const eventsListEl = document.getElementById('events-list');



// I dont think we need these two below, I commented them out and everything works the same
const headers = {
  'X-API-Key': apiKey,
};

const options = {
  method: 'GET',
  headers: headers,
};



//   // ----------------- Functions section below -----------------

fetch(qURL)
  .then(response => response.json())
  .then(responseJson => {

  // the if statement checks to see if events exists in responseJson and the array.isarray checks if the events is an array
  if (responseJson.events && Array.isArray(responseJson.events)) {    
    for (let event of responseJson.events) {  
    const eventsList = document.createElement('p');
    eventsList.textContent = event.title || 'no title available';
    eventsListEl.append(eventsList);

    // i played with console logging a variety of keywords such as 'eventsList' 'event.title' but the 'event' seemed to display the desirable information so that we can add the type to the form 
    console.log(event)
    }
    // not quite sure what to do with this esle statement
}   else {
}

})
  .catch(error => console.error('fetch error:', error));  
    
    
  
// // // ----------------- Event listener section below-----------------









