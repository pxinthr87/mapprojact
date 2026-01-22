var map = L.map('map').setView([13.539973, 100.620207], 17);

L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: '© Esri' }
).addTo(map);

var buildings = [
  {
    name: "อาคาร 1",
    lat: 13.539755,
    lng: 100.620095,
    images: ["images/building1.jpg","images/building4.png"],
    detail: "อาคารอำนวยการ"
  },
  {
    name: "อาคาร 2",
    lat: 13.540015,
    lng: 100.619764,
    images: ["images/building2.jpg", "images/building3.png"],
    detail: "อาคารคณะการตลาด/ห้องงานทะเบียน"
  },
  {
    name: "อาคาร 3",
    lat: 13.539242,
    lng: 100.619722,
    images: ["images/building5.png"],
    detail: "อาคารภาษาไทย/สังคม/ห้องวัดผล"
  },
  {
    name: "ห้องสมุด",
    lat: 13.53926,
    lng: 100.619964,
    images: ["images/building6.png"],
    detail: "ห้องสมุด"
  },
  {
    name: "โรงอาหาร",
    lat: 13.538444,
    lng: 100.619906, 
    images: ["images/building7.png"],
    detail: "โรงอาหาร1"
  },
   {
    name: "อาคาร 9",
    lat: 13.539474,
    lng: 100.619232, 
    images: ["images/building8.png"],
    detail: "อาคารคณะโลจิสติกส์/ห้องประชุมใหญ่"
  },
  {
    name: "อาคารศิลปกรรม",
    lat: 13.539123,
    lng: 100.619250, 
    images: ["images/building9.png"],
    detail: "อาคารคณะศิลปกรรม/คอมพิวเตอร์กราฟฟิค"
  },
  {
    name: "แผนกช่างยนต์",
    lat: 13.53875,
    lng: 100.618725,
    images: ["images/building10.png",],
    detail: "อาคารคณะช่างยนต์"
  },
];

buildings.forEach(b => {
  let imagesHtml = '';
  if (b.images && Array.isArray(b.images)) {
    imagesHtml = b.images.map(img => `<img src="${img}" style="width:200px;margin-bottom:5px;"><br>`).join('');
  } else if (b.image) {
    imagesHtml = `<img src="${b.image}" style="width:200px"><br>`;
  }
  L.marker([b.lat, b.lng])
    .addTo(map)
    .bindPopup(`
      <b>${b.name}</b><br>
      ${imagesHtml}
      <small>${b.detail}</small><br>
      <a href="https://www.google.com/maps/dir/?api=1&destination=${b.lat},${b.lng}" target="_blank" style="color:blue;text-decoration:underline;">
        🧭 นำทาง
      </a>
    `);
});
