var frame = getElementById("chat");
var x = getElementById("coords");
frame.style.left = "100px";
frame.style.top = "100";
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = position.coords.latitude + position.coords.longitude;
}
