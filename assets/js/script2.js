// // ----------------- Global variables section below -----------------

const url = 'https://api.seatgeek.com/2'
const apiKey = 'efd618d723ac9af1b3cb310dd19590338cd98b5bd32204a2e633c7bdcfb2f5f9'
const clientId = 'NDE4MTc1OTZ8MTcxNjY2OTE4NC43MTg5Nw'
const events = 'events'
const perPage = '200'
const venues = 'venues'
const qURL = `${url}/${events}?per_page=${perPage}&client_id=${clientId}`

// cant seem to use venues without their unique IDs

console.log(qURL);

// const headers = {
//   'X-API-Key': apiKey,
// };

// const options = {
//   method: 'GET',
//   headers: headers,
// };


//   // ----------------- Functions section below -----------------
const options = 'options'
fetch(qURL)
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









