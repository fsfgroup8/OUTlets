// ----------------- Global variables section below -----------------

const searchBtn = document.getElementById('search-button');
const cityList = document.getElementById('city-list');
const eventType = document.getElementById('event-type');
const fetchAPIButton = document.getElementById('fetch-api-button');


// ----------------- Functions & event listener sections below -----------------

// Event listener for html landing page search button.
searchBtn.addEventListener('click', function() {
  const modal = document.getElementById('exModal');
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
});

// Saves user's selections to local storage & goes on to the next page of the site
fetchAPIButton.addEventListener('click', function() {
  const citySelection = cityList.value;
  const eventSelection = eventType.value;

  localStorage.setItem('citySelection', citySelection);
  localStorage.setItem('eventSelection', eventSelection);

  window.location.replace("./index2.html")
})









