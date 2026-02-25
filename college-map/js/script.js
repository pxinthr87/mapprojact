
var map = L.map('map').setView([13.539973, 100.620207], 17);

L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: '© Esri' }
).addTo(map);

var buildings = [
  {
    name: "อาคาร1",
    lat: 13.539755,
    lng: 100.620095,
    images: ["images/building1.jpg","images/building4.png"],
    detail: "ห้องอำนวยการ"
  },
  {
    name: "อาคาร2",
    lat: 13.540015,
    lng: 100.619764,
    images: ["images/building2.jpg", "images/building3.png"],
    detail: "คณะการตลาด/ห้องงานทะเบียน"
  },
  {
    name: "อาคาร3",
    lat: 13.539242,
    lng: 100.619722,
    images: ["images/building5.png"],
    detail: "คณะภาษาไทย/คณะสังคม/คณะห้องวัดผล"
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
    name: "อาคาร9",
    lat: 13.539474,
    lng: 100.619232, 
    images: ["images/building8.png"],
    detail: "คณะโลจิสติกส์/ห้องประชุมใหญ่"
  },
  {
    name: "อาคารศิลปกรรม",
    lat: 13.539123,
    lng: 100.619250, 
    images: ["images/building9.png"],
    detail: "คณะศิลปกรรม/คอมพิวเตอร์กราฟฟิค"
  },
  {
    name: "แผนกช่างยนต์",
    lat: 13.53875,
    lng: 100.618725,
    images: ["images/building10.png",],
    detail: "คณะช่างยนต์"
  },
  {
    name: "แผนกช่างเชื่อมโลหะ",
    lat: 13.538613,
    lng: 100.61928,
    images: ["images/building11.png",],
    detail: "คณะช่างเชื่อมโลหะ"
  },
   {
    name: "แผนกช่างก่อสร้าง",
    lat: 13.538787,
    lng: 100.61833,
    images: ["images/building12.png",],
    detail: "คณะช่างก่อสร้าง"
  },
  {
    name: "แผนกแฟชั่นและสิ่งทอ/อุตสาหกรรมการท่องเที่ยว/การโรงแรม",
    lat: 13.538315,
    lng: 100.619144,
    images: ["images/building13.png","images/building14.png","images/building15.png",],
    detail: "คณะแฟชั่นและสิ่งทอ/คณะอุตสาหกรรมการท่องเที่ยว/คณะการโรงแรม"
  },
  {
    name: "แผนกอาหารและโภชนาการ",
    lat: 13.537973,
    lng: 100.619485,
    images: ["images/building16.png",],
    detail: "คณะอาหารและโภชนาการ"
  },
   {
    name: "งานสวัสดิการนักเรียนนักศึกษา",
    lat: 13.537973,
    lng: 100.619173,
    images: ["images/building17.png",],
    detail: "งานสวัสดิการนักเรียนนักศึกษา"
  },
  {
    name: "งานพัสดุ",
    lat: 13.538265,
    lng: 100.61947,
    images: ["images/building18.png",],
    detail: "งานพัสดุ"
  },
  {
    name: "โรงอาหาร2",
    lat: 13.537643,
    lng: 100.617555,
    images: ["images/building19.png",],
    detail: "โรงอาหาร2"
  },
  {
    name: "แผนกวิชาช่างอากาศยาน",
    lat: 13.537555,
    lng: 100.617777,
    images: ["images/building20.png",],
    detail: "แผนกวิชาช่างอากาศยาน"
  },
  {
    name: "แผนกเทคโนโลยีสารสนเทศ/แผนกช่างเทคนิคอุตสาหกรรม",
    lat: 13.537387,
    lng: 100.617725,
    images: ["images/building21.png","images/building22.png",],
    detail: "แผนกเทคโนโลยีสารสนเทศ/แผนกช่างเทคนิคอุตสาหกรรม"
  },
  {
    name: "สาขางานออกแบบและเขียนแบบการผลิต/สาขางานเขียนแบบเครื่องกล",
    lat: 13.538126,
    lng: 100.618847,
    images: ["images/building23.png",],
    detail: "สาขางานออกแบบและเขียนแบบการผลิต/สาขางานเขียนแบบเครื่องกล"
  },
  {
    name: "แผนกช่างเชื่อมและโลหะแผ่น",
    lat: 13.538351,
    lng: 100.619057,
    images: ["images/building24.png",],
    detail: "แผนกช่างเชื่อมและโลหะแผ่น"
  },
   {
    name: "คณะวิชาเครื่องกลและยานยนต์",
    lat: 13.538043,
    lng: 100.618847,
    images: ["images/building25.png",],
    detail: "คณะวิชาเครื่องกลและยานยนต์"
  },
   {
    name: "แผนกช่างก่อสร้าง",
    lat: 13.538363,
    lng: 100.618279,
    images: ["images/building26.png",],
    detail: "แผนกช่างก่อสร้าง"
  },
  {
    name: "แผนกแม่พิมพ์โลหะ",
    lat: 13.537819,
    lng: 100.618723,
    images: ["images/building27.png",],
    detail: "แผนกแม่พิมพ์โลหะ"
  },
  {
    name: "แผนกอิเล็กทรอนิกส์",
    lat: 13.537517,
    lng: 100.618267,
    images: ["images/building28.png",],
    detail: "แผนกอิเล็กทรอนิกส์"
  },
   {
    name: "สนามกีฬา/ลานจอดเครื่องบิน",
    lat: 13.537977,
    lng: 100.617868,
    images: ["images/building29.png",],
    detail: "สนามกีฬา/ลานจอดเครื่องบิน"
  },
  {
    name: "แผนกวิชาแม่พิมพ์พลาสติก",
    lat: 13.537458,
    lng: 100.618655,
    images: ["images/building30.png",],
    detail: "แผนกวิชาแม่พิมพ์พลาสติก"
  },
];

// เก็บ marker ไว้เพื่อใช้ค้นหา
var buildingMarkers = [];
buildings.forEach(b => {
  let imagesHtml = '';
  if (b.images && Array.isArray(b.images)) {
    imagesHtml = b.images.map(img => `<img src="${img}" style="width:200px;margin-bottom:5px;"><br>`).join('');
  } else if (b.image) {
    imagesHtml = `<img src="${b.image}" style="width:200px"><br>`;
  }
  var marker = L.marker([b.lat, b.lng])
    .addTo(map)
    .bindPopup(`
      <b>${b.name}</b><br>
      ${imagesHtml}
      <small>${b.detail}</small><br>
      <a href="https://www.google.com/maps/dir/?api=1&destination=${b.lat},${b.lng}" target="_blank" style="color:blue;text-decoration:underline;">
        🧭 นำทาง
      </a>
    `);
  // เพิ่ม tooltip (title) ให้ marker
  marker.bindTooltip(`<b>${b.name}</b><br><small>${b.detail}</small>`, {direction: 'top', sticky: true, offset: [0, -10]});
  buildingMarkers.push({ marker, detail: b.detail });
});

  // สร้าง Sidebar รายชื่ออาคาร/สถานที่
  document.addEventListener('DOMContentLoaded', function() {
    var sidebarList = document.getElementById('sidebar-list');
    var sidebar = document.getElementById('sidebar');
    var toggleBtn = document.getElementById('sidebar-toggle');
    if (sidebarList) {
      buildings.forEach(function(b, idx) {
        var li = document.createElement('li');
        li.textContent = b.name;
        li.title = b.detail;
        li.tabIndex = 0;
        li.addEventListener('click', function() {
          map.setView([b.lat, b.lng], 19);
          buildingMarkers[idx].marker.openPopup();
          Array.from(sidebarList.children).forEach(el => el.classList.remove('active'));
          li.classList.add('active');
        });
        sidebarList.appendChild(li);
      });
    }
    // toggle sidebar
    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('hide');
        if (sidebar.classList.contains('hide')) {
          toggleBtn.textContent = 'แสดงรายชื่อสถานที่';
        } else {
          toggleBtn.textContent = 'ปิดรายชื่อสถานที่';
        }
      });
      // เริ่มต้นซ่อน sidebar
      sidebar.classList.add('hide');
    }
  });

// ฟังก์ชันค้นหา detail
function searchDetail() {
  var input = document.getElementById('search-input');
  var keyword = input.value.trim();
  if (!keyword) return;
  var found = false;
  for (var i = 0; i < buildings.length; i++) {
    var b = buildings[i];
    var m = buildingMarkers[i].marker;
    // split name/detail by '/'
    var nameParts = b.name ? b.name.split('/') : [];
    var detailParts = b.detail ? b.detail.split('/') : [];
    var match = false;
    // check each part
    nameParts.forEach(function(part) {
      if (part.trim().indexOf(keyword) !== -1) match = true;
    });
    detailParts.forEach(function(part) {
      if (part.trim().indexOf(keyword) !== -1) match = true;
    });
    if (match) {
      map.setView(m.getLatLng(), 19);
      m.openPopup();
      found = true;
      break;
    }
  }
  if (!found) {
    alert('ไม่พบข้อมูลที่ค้นหา');
  }
}

// Event สำหรับปุ่มค้นหา + ระบบแนะนำคำค้นหา
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('search-btn');
  var input = document.getElementById('search-input');
  var suggestionBox = document.getElementById('search-suggestions');

  // สร้างรายการคำค้นหาทั้งหมดจาก name และ detail (แยก /)
  var allKeywords = [];
  buildings.forEach(function(b) {
    if (b.name) {
      b.name.split('/').forEach(function(part) {
        var kw = part.trim();
        if (kw && allKeywords.indexOf(kw) === -1) allKeywords.push(kw);
      });
    }
    if (b.detail) {
      b.detail.split('/').forEach(function(part) {
        var kw = part.trim();
        if (kw && allKeywords.indexOf(kw) === -1) allKeywords.push(kw);
      });
    }
  });

  function showSuggestions(value) {
    var val = value.trim();
    if (!val) {
      suggestionBox.style.display = 'none';
      suggestionBox.innerHTML = '';
      return;
    }
    var matches = allKeywords.filter(function(kw) {
      return kw.indexOf(val) !== -1;
    });
    if (matches.length === 0) {
      suggestionBox.style.display = 'none';
      suggestionBox.innerHTML = '';
      return;
    }
    suggestionBox.innerHTML = matches.map(function(kw) {
      return '<li style="padding:8px 12px;cursor:pointer;" tabindex="0">' + kw + '</li>';
    }).join('');
    suggestionBox.style.display = 'block';
    // คลิกเลือก suggestion
    Array.from(suggestionBox.children).forEach(function(li) {
      li.addEventListener('mousedown', function(e) {
        input.value = li.textContent;
        suggestionBox.style.display = 'none';
        searchDetail();
      });
    });
  }

  if (btn && input) {
    btn.addEventListener('click', searchDetail);
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        suggestionBox.style.display = 'none';
        searchDetail();
      }
    });
    input.addEventListener('input', function(e) {
      showSuggestions(input.value);
    });
    input.addEventListener('focus', function() {
      showSuggestions(input.value);
    });
    input.addEventListener('blur', function() {
      setTimeout(function() { suggestionBox.style.display = 'none'; }, 150);
    });
  }
});

