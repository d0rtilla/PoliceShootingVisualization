// Create Leaflet Map object
let myMap = L.map("map", {
    center: [45, -100],
    zoom: 3
  });

// Create Tile Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Create Marker Layer
let test_marker = L.marker([45,-95]).bindPopup("This is a test marker.").addTo(myMap);

