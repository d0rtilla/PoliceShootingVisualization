// Set up MongoDB endpoint
const mongo_endpoint='mongo';

// Create Leaflet Map object
let myMap = L.map("map", {
    center: [45, -100],
    zoom: 3
  });

// Create Tile Layer using OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Get Data and Plot on Map
d3.json(mongo_endpoint).then(function(data){
  console.log("Raw data:", data);
  console.log("Length:", data.length);
  let markers = [];
  let name = [];
  let date = [];
  let age = [];
  let sex = [];
  let race = [];
  let armed = [];
  let city = [];
  let state = [];
  
  for (let i = 1; i < data.length; i++){
    markers[i] = [data[i]['latitude'], data[i]['longitude']]
    name[i] = [data[i]['name']]
    date[i] = [data[i]['date']]
    age[i] = [data[i]['age']]
    sex[i] = [data[i]['sex']]
    race[i] = [data[i]['race']]
    armed[i] = [data[i]['armed']]
    city[i] = [data[i]['city']]
    state[i] = [data[i]['state']]
  };
  let metadata = "";
  for (let j = 1; j < markers.length; j++){
    // console.log("Marker Coords", markers[j]);
    metadata = "<dl><dt>Name</dt><dd>" + String(name[j]) + "</dd><dt>Date</dt><dd>" + String(date[j]) + "</dd><dt>Age</dt><dd>" + String(age[j]) + "</dd><dt>Gender</dt><dd>" + String(gender[j]) + "</dd><dt>Race</dt><dd>" + String(race[j]) + "</dd><dt>Armed?</dt><dd>" + String(armed[j]) + "</dd><dt>City</dt><dd>" + String(city[j]) + "</dd><dt>State</dt><dd>" + String(state[j]) + "</dd></dl>";
    L.marker(markers[j]).bindPopup(metadata).addTo(myMap);
  };
});