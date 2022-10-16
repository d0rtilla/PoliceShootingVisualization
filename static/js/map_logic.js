// Set up MongoDB endpoint.
const mongo_endpoint='mongo';

// Create Leaflet Map object.
let myMap = L.map("map", {
    center: [45, -100],
    zoom: 3
  });

// Create Tile Layer using OpenStreetMap.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Access the MongoDB data via the Mongo endpoint.
d3.json(mongo_endpoint).then(function(data){
  
// Create arrays to hold each parameter of the data.
  let lat = [];
  let lng = [];
  let name = [];
  let date = [];
  let age = [];
  let sex = [];
  let race = [];
  let armed = [];
  let city = [];
  let state = [];
  
  // Populate the marker coordinates and metadata parameters for each incident.
  for (let i = 1; i < data.length; i++){    
    lat[i] = [data[i]['latitude']]
    lng[i] = [data[i]['longitude']]
    name[i] = [data[i]['name']]
    date[i] = [data[i]['date']]
    age[i] = [data[i]['age']]
    sex[i] = [data[i]['sex']]
    race[i] = [data[i]['ethnicity']]
    armed[i] = [data[i]['armed']]
    city[i] = [data[i]['city']]
    state[i] = [data[i]['state']]
  };

  // Create the empty marker layer for the marker clusters
  let markers = L.markerClusterGroup();
  
  // Create empty array for the metadata to populate
  let metadata = [];
  
  for (let j = 1; j < data.length; j++) {
    // Create an HTML string to populate the marker popup. The string uses an HTML description list to create heading-value pairs.
    metadata[j] = ("<dl><dt>Name</dt><dd>" + String(name[j]) + "</dd><dt>Date</dt><dd>" + String(date[j]) + "</dd><dt>Age</dt><dd>" + String(age[j]) + "</dd><dt>Sex</dt><dd>" + String(sex[j]) + "</dd><dt>Race</dt><dd>" + String(race[j]) + "</dd><dt>Armed?</dt><dd>" + String(armed[j]) + "</dd><dt>City</dt><dd>" + String(city[j]) + "</dd><dt>State</dt><dd>" + String(state[j]) + "</dd></dl>");
    // Create a marker for the given location and attach the metadata as a popup. Add the marker to the marker cluster layer.
    markers.addLayer((L.marker([lat[j][0], lng[j][0]])).bindPopup(metadata[j]));
  };

  // Add the layer with the marker clusters to the map
  myMap.addLayer(markers);
});


// Process to feed data from MongoDB (using a dedicated Mongo route on the Flask server) to this page via Flask adapted from Dom's Flask Demo. Thank you!
// Solution for multi-line popup adapted from: https://gis.stackexchange.com/questions/31859/how-to-insert-new-line-text-in-popup