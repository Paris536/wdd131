// script.js

// one-line wind chill function (handles metric and imperial)
function calculateWindChill(temp, speed, units = 'metric') {
  // metric: temp = °C, speed = km/h — Canadian formula
  // imperial: temp = °F, speed = mph — US formula
  return units === 'metric'
    ? 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)
    : 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
}

document.addEventListener('DOMContentLoaded', () => {
  // static values that match the page content
  const tempElem = document.getElementById('temp');        // shown on page
  const windElem = document.getElementById('windspeed');   // shown on page
  const windchillElem = document.getElementById('windchill');

  // read the static values from the DOM (or set them here)
  const temp = parseFloat(tempElem.textContent);    // °C
  const wind = parseFloat(windElem.textContent);    // km/h

  // viability checks (metric): temperature <= 10°C and wind > 4.8 km/h
  if (temp <= 10 && wind > 4.8) {
    const wc = calculateWindChill(temp, wind, 'metric');
    // round to 1 decimal
    windchillElem.textContent = wc.toFixed(1) + ' °C';
  } else {
    windchillElem.textContent = 'N/A';
  }

  // footer current year and last modified date
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastmodified').textContent = document.lastModified || 'Unknown';
});
