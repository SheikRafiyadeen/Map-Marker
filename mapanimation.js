// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [77.3411,11.1085],
  [77.2852,10.9956],
  [77.1566,11.0313],
  

];
 
// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hlaWs0NSIsImEiOiJja3hlNjd0N2MxNWZpMnJwZDl6bjBieWxtIn0.wKWZjUlvN6w7y6Fh_Aumig';
 
// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [77.3411,11.1085],
  zoom: 8,
});
var marker = new mapboxgl.Marker()
    .setLngLat([77.3411,11.1085])
    .addTo(map);
 
// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
 
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  setTimeout(() => {
    if(counter >= busStops.length)
    return;
    marker.setLngLat(busStops[counter]);
    counter++;
  },1000)

  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
}
 
  
