// get Latitude and Longitude of current location

function getLatitudeAndLongitude() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("demo").innerHTML =
    "Geolocation is not supported by this browser.";
  }
  
  function showPosition(position) {
    document.getElementById( /* where it will display the lat and long */"demo").innerHTML =
    "Latitude: " + position.coords.latitude +
    "Longitude: " + position.coords.longitude;
  }
}
  console.log(getLatitudeAndLongitude);

  export default(getLatitudeAndLongitude);

