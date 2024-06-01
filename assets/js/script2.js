// ----------------- Global variables section below -----------------

const cityName = localStorage.getItem('citySelection');
const eventName = localStorage.getItem('eventSelection');
const clientId = 'NDE4MTc1OTZ8MTcxNjY2OTE4NC43MTg5Nw';
const apiKey = 'efd618d723ac9af1b3cb310dd19590338cd98b5bd32204a2e633c7bdcfb2f5f9';

// ----------------- Functions section below -----------------

// Checks if cityName is available to construct the URL
if (cityName) {
  const url = `https://api.seatgeek.com/2/events?venue.city=${cityName}&client_id=${clientId}`;

  const headers = {
    'X-API-Key': apiKey,
  };

  const options = {
    method: 'GET',
    headers: headers,
  };

  // Fetches Events API
  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      renderEvents(data.events);
    })
    .catch(error => {
      console.error('Error:', error);
    });
} else {
  console.error('City name is not available in localStorage.');
}

// Function to render events
function renderEvents(events) {
  const mainSection = document.getElementById('events-section');
  mainSection.className = 'events-grid';

  const uniqueEvents = Array.from(new Set(events.map(event => event.id)))
                            .map(id => events.find(event => event.id === id));

  uniqueEvents.forEach(event => {
    const suggestionContainer = document.createElement('div');
    suggestionContainer.className = 'event-container';

    const eventLink = document.createElement('a');
    eventLink.href = event.url;
    eventLink.target = '_blank'; // Open link in a new tab

    const eventImage = document.createElement('img');
    eventImage.src = event.performers[0].image || 'default-image.jpg'; // Fallback image if none available
    eventImage.alt = event.performers[0].name;

    eventLink.appendChild(eventImage);

    const eventType = document.createElement('p');
    eventType.textContent = `Type: ${event.type}`;

    const eventLocation = document.createElement('p');
    eventLocation.textContent = `Location: ${event.venue.name}`;

    suggestionContainer.appendChild(eventLink);
    suggestionContainer.appendChild(eventType);
    suggestionContainer.appendChild(eventLocation);
    mainSection.appendChild(suggestionContainer);
  });
}

// ----------------- Event listener section below -----------------

// Fetches & renders Chuck Norris Jokes
const createRandomJoke = function(data) {

  // Here is the url with the  different categories. We can decide which we want https://api.chucknorris.io/jokes/categories
  fetch('https://api.chucknorris.io/jokes/random?category=history,dev,money,sport,science,animal', {
})
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data.value);
  const jokeContainer = document.createElement('div')
  const jokeEl = document.createElement('p');
  const actualJokeContainer = document.getElementById('joke-container')

  jokeEl.textContent = data.value;
  jokeEl.setAttribute('style', 'color: black');

  jokeContainer.append(jokeEl);
  actualJokeContainer.appendChild(jokeContainer);
});
} 

createRandomJoke();
