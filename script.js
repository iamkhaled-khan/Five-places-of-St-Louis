// Initialize map centered on St. Louis
const map = L.map('map').setView([38.6270, -90.1994], 12);

// Base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Places of interest (updated)
const places = [
  {
    name: 'Gateway Arch',
    desc: 'Iconic stainless-steel arch on the Mississippi.',
    coords: [38.6247, -90.1848],
    color: '#0077b6'
  },
  {
    name: 'City Museum',
    desc: 'Whimsical architectural playground & museum.',
    coords: [38.6339, -90.2006],
    color: '#8338ec'
  },
  {
    name: 'Forest Park',
    desc: 'One of the largest urban parks in the U.S.',
    coords: [38.6387, -90.2846],
    color: '#2a9d8f'
  },
  {
    name: 'Saint Louis Zoo',
    desc: 'Free-admission world-class zoo in Forest Park.',
    coords: [38.6357, -90.2906],
    color: '#ff7f11'
  },
  {
    name: 'Saint Louis University',
    desc: 'Private Jesuit research university in St. Louis.',
    coords: [38.6350, -90.2360],
    color: '#003087'
  }
];

// Add custom circle markers with popups
const group = L.featureGroup();

places.forEach((p) => {
  const marker = L.circleMarker(p.coords, {
    radius: 9,
    color: p.color,
    weight: 3,
    fillColor: p.color,
    fillOpacity: 0.85
  }).addTo(map);

  marker.bindPopup(`<b>${p.name}</b><br>${p.desc}`);
  group.addLayer(marker);
});

// Fit bounds to all points
map.fitBounds(group.getBounds().pad(0.15));