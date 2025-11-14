// Static weather inputs (per assignment: use static values)
const temperatureC = 22; // degrees Celsius (static)
const windSpeedKmh = 15; // km/h (static)


// calculateWindChill: single-line function that returns computed wind chill in °C
// Uses the standard Canadian wind chill formula for °C and km/h
function calculateWindChill(tempC, windKmh){
return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}


// Only calculate if conditions satisfied: temp <= 10°C and wind > 4.8 km/h
function computeAndRenderWindChill(){
const tempEl = document.getElementById('temp');
const windEl = document.getElementById('wind');
const wcEl = document.getElementById('windchill');


if (!tempEl || !windEl || !wcEl) return;


tempEl.textContent = temperatureC;
windEl.textContent = windSpeedKmh;


if (temperatureC <= 10 && windSpeedKmh > 4.8){
const wc = calculateWindChill(temperatureC, windSpeedKmh);
wcEl.textContent = wc.toFixed(1) + ' °C';
} else {
wcEl.textContent = 'N/A';
}
}


// Render footer values: current year and last modified
function renderFooter(){
const yearEl = document.getElementById('year');
const lmEl = document.getElementById('lastmodified');
if (yearEl) yearEl.textContent = new Date().getFullYear();
if (lmEl) lmEl.textContent = document.lastModified || 'Unknown';
}


// Run on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
computeAndRenderWindChill();
renderFooter();
});