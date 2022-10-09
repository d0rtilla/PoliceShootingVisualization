// // Create Leaflet map object
// let myMap = L.map("map", {
//     center: [40.7128, -74.0059],
//     zoom: 3
//   });

// // Create tile layer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(myMap);


// // Create marker layer

let myMap = L.map("map", {
    center: [45, -100],
    zoom: 3
  });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);