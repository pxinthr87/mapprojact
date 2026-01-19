var map = L.map('map').setView([13.539973, 100.620207], 17);

L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: '© Esri' }
).addTo(map);

var buildings = [
  {
    name: "อาคาร 1",
    lat: 13.539763,
    lng: 100.619968,
    image: "images/building1.jpg",
    detail: "อาคารอำนวยการ"
  },
{
  name: "อาคาร 2",
  lat: 13.540015,
  lng: 100.619764,
  image: "images/building2.jpg",
  detail: "อาคารคณะการตลาด"
},
{
  name: "อาคาร 3",
  lat: 13.539412,
  lng: 100.620082,
  image: "images/building2.jpg",
  detail: "อาคารวิชาคณิตศาสตร์/วิทยาศาสตร์"
},
{
  name: "สหกรณ์",
  lat: 13.539026,
  lng: 100.6198,
  image: "images/building2.jpg",
  detail: "อาคารหอประชุม"
},
{
  name: "อาคาร 4",
  lat: 13.539823,
  lng: 100.620643, 
  image: "images/building2.jpg"
  ,detail: "อาคารวิชาคอมพิวเตอร์"
},
];

buildings.forEach(b => {
  L.marker([b.lat, b.lng])
    .addTo(map)
    .bindPopup(`
      <b>${b.name}</b><br>
      <img src="${b.image}" style="width:200px"><br>
      <small>${b.detail}</small><br>
      <a href="https://www.google.com/maps/dir/?api=1&destination=${b.lat},${b.lng}" target="_blank" style="color:blue;text-decoration:underline;">
        🧭 นำทาง
      </a>
    `);
});
