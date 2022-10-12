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
  let info = [];
  for (let i = 1; i < data.length; i++){
    markers[i] = [data[i]['latitude'], data[i]['longitude']]
    info[i] = [data[i]['name']]
  };
  console.log("Markers:", markers);
  console.log("Info:", info);
  for (let j = 1; j < markers.length; j++){
    // console.log("Marker Coords", markers[j]);
    L.marker(markers[j]).bindPopup(String(info[j])).addTo(myMap);
  };
});