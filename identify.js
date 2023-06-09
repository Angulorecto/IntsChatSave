var frame = document.getElementById("frame");
let x = 0;
let y = 0;

let Schoolx = "";
let Schooly = "";
function between(num, min, max) {
  return num >= min && num <= max;
};
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  };
};

function showPosition(position) {
  x = position.coords.latitude;
  y = position.coords.longitude;
};
function setFrame() {
  // NHMS Check
  // x check 
  if (between(x, 42.98967684492836, 42.99068069641312)) {
    Schoolx = "NHMS";
  };
  // y check 
  if (between(y, -85.58028245713595, -85.5784934721124)) {
    Schooly = "NHMS";
  };
  if (Schoolx == "NHMS" && Schooly == "NHMS") {
    frame.src = "https://deadsimplechat.com/1Cflie9fe";
  };
};
frame.onload(getLocation).then(setFrame);
alert("Script has worked");
