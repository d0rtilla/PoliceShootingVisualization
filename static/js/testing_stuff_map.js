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

// Create Marker Layer
let test_marker = L.marker([45,-95]).bindPopup("This is a test marker.").addTo(myMap);

// Get data and plot on map
d3.json(mongo_endpoint).then(function(data){
  console.log("Raw data:", data);
  console.log("Length:", data.length);
  let markers = [];
  for (let i = 1; i < data.length; i++){
    markers[i] = [data[i]['latitude'], data[i]['longitude']]
  };
  console.log("Markers:", markers);
  for (let j = 1; j < markers.length; j++){
    // console.log("Marker Coords", markers[j]);
    L.marker(markers[j]).addTo(myMap);
  };
});