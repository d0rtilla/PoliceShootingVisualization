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
  let geoJson = {"type": "FeatureCollection"};
  let features = [{}];
  console.log("Length:", data.length);
  for (let i = 1; i < data.length; i++){
    features.push({"type":"Feature",
                    "geometry": {
                      "type": "Point",
                      "coordinates": [data[0]['latitude'], data[0]["longitude"]]
                    },
                    "properties": {
                      "placeholder": i
                    }
                  })
  };
  console.log("Features:", features);
  geoJson.features = features;
  console.log("geoJSON:", geoJson);
  
  L.geoJSON(geoJson).addTo(myMap);
});