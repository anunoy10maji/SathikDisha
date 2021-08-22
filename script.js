mapboxgl.accessToken =
  "pk.eyJ1IjoiYW51bm95ODYiLCJhIjoiY2tzbmU4dHZ4MG82MTJxcDd5cnd6czB2dCJ9.4anhGq_ZWgXMyLtnQzNVPg";

//calling API getcurrentposition which include two major parameter sucesslocation and errorlocation and one optional parameter of accuracy
navigator.geolocation.getCurrentPosition(successlocation, errorlocation, {
  enableaccuracy: true,
});

function successlocation(position) {
  setmap([position.coords.longitude, position.coords.latitude]);
}
function errorlocation(position) {
  setmap([22.5726, 88.3639]);
}

function setmap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });

  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl());

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });
  map.addControl(directions, "top-left");
}
