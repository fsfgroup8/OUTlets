// ----------------- Global variables section below -----------------

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


// ----------------- Functions section below -----------------


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

const createEventCard = function() {

    // Potential values to grab from API
    // Is put the syntax based on the key value address in the data object
    // events.title
    // events.type
    // events.venue
    // events.venue.city
    // events.venue.postal_code


    // Or geolocation data
    // events.location.state
    // events.venue.city
    // events.venue.postal_code
    // events.location.lat & lon
    // IP Address

    // if(eventLocation && eventType) {console.log(createEventCard)}
    // else {console.log('no events found')};

    // I am thinking this could be the beginning of the conditional logic to verify event type and location

    const eventContainer = document.createElement('.divContainer');
    const eventCard = document.createElement('div');
    const eventTitle = document.createElement('h1');
    const eventType = document.createElement('h3');
    const eventCity = document.createElement('h3');
    const eventZip = document.createElement('h3');
    const eventVenue = document.createElement('h3');
``

    eventContainer.append(eventTitle, eventType, eventZip, eventVenue);
}

createEventCard();


// ----------------- Event listener section below-----------------









