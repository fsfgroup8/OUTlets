// // ----------------- Global variables section below -----------------

const url = 'https://api.seatgeek.com/2/venues?city={this will grab form value from hobby list 1 value}'
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


//   // ----------------- Functions section below -----------------

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


// // // ----------------- Event listener section below-----------------









