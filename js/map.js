// const map = L.map('map').setView([43.6532, -79.3832], 10);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// L.marker([43.6532, -79.3832])
//     .addTo(map)
//     .bindPopup("<b>Toronto Office</b>")



const map = L.map('map').setView([43.6426, -79.3871], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([43.6426, -79.3871])
    .addTo(map)
    .bindPopup(`
        <b>Blueframe</b><br>
        290 Bremner Blvd<br>
        Toronto, ON M5V 3L9
    `)
    .openPopup();