//instantiate leaflet map
//var map = L.map('mapContainer').setView([51.505, -0.09], 13);

var map = L.map('mapContainer').setView([19.2069, 72.8245],13);
      L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution">CARTO</a>'
      }).addTo(map);

      L.marker([19.2069, 72.8245]).addTo(map)
      .bindPopup('Charkop Sites and Services Project Area');

      L.circle([19.2069, 72.8245], {radius: 1000}).addTo(map);

