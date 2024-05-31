// ----------------- Global variables section below -----------------

const cityName = localStorage.getItem('citySelection');
const eventName = localStorage.getItem('eventSelection');
const clientId = 'NDE4MTc1OTZ8MTcxNjY2OTE4NC43MTg5Nw';
const apiKey = 'efd618d723ac9af1b3cb310dd19590338cd98b5bd32204a2e633c7bdcfb2f5f9';

// Checks if cityName is available to construct the URL
if (cityName) {
  const url = `https://api.seatgeek.com/2/venues?city=${cityName}&client_id=${clientId}`;

  const headers = {
    'X-API-Key': apiKey,
  };

  const options = {
    method: 'GET',
    headers: headers,
  };


  // ----------------- Functions section below -----------------


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
    })
    .catch(error => {
      console.error('Error:', error);
    });
} else {
  console.error('City name is not available in localStorage.');
}

// ----------------- Event listener section below -----------------









