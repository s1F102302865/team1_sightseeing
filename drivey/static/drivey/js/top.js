const markersData = { 
  onsen: [
    { name: "星野温泉トンボの湯", url: "https://www.hoshino-area.jp/tombo-no-yu/", x: 0.75, y: 0.429, lat:36.361439702472715 , lng:138.58878392790777 },
    { name: "ひまわりの湯", url: "https://hiraya-himawarinoyu.com/", x: 0.28, y: 0.857, lat:35.32402618783672 , lng:137.63135866033696 },
    { name: "白骨温泉公共野天風呂", url: "https://shirahone-onsen.org/", x: 0.28, y: 0.5, lat:36.15219941771612 , lng:137.6275888817321 },
    { name: "湯の華銭湯瑞祥", url: "https://zuisho.com/", x: 0.4, y: 0.457, lat:36.47941160122993 , lng:138.14320695366132 },
    { name: "地蔵温泉十福の湯", url: "https://zippuku.net/", x: 0.6, y: 0.357, lat:36.501767287742986 , lng:138.23043404964108},
    { name: "早太郎温泉", url: "https://hayataro.org/", x: 0.42, y: 0.7, lat:35.74336520707705 , lng:137.88800933455923 },
    { name: "南相木温泉滝見の湯", url: "https://takiminoyu.com/", x: 0.74, y: 0.557 , lat:36.0171584368439 , lng:138.56571168068328 },
  ],

  shrine: [
    { name: "光前寺", url: "http://www.kozenji.or.jp/", x: 0.46, y: 0.686, lat:35.735909591984 ,lng:137.8974020091907  },
    { name: "鳩ヶ嶺八幡宮", url: "https://hatogamine.org/", x: 0.38, y: 0.8 , lat:35.49590404242432 ,lng:137.83823583256674},
    { name: "諏訪大社", url: "https://suwataisha.or.jp/", x: 0.46, y: 0.571 , lat:36.000296388237736 , lng:138.12001141254376 },
    { name: "戸隠神社", url: "https://www.togakushi-jinja.jp/", x: 0.52, y: 0.243 , lat:36.75550306560549 , lng:138.07889222079572 },
    { name: "熊野皇大神社", url: "https://kumanokoutai.com/", x: 0.8, y: 0.393 , lat:36.36934699413184 , lng:138.6566048695912 },
    { name: "眞田神社", url: "http://sanada-jinja.com/", x: 0.6, y: 0.443, lat:36.40504908863375 , lng:138.24658035996208 },
    { name: "真田山長谷寺", url: "http://www.chouk.or.jp/", x: 0.66, y: 0.393 , lat:36.44648346766129 , lng:138.33567185013342 },
    { name: "穂高神社", url: "https://www.hotakajinja.com/", x: 0.4, y: 0.471 , lat:36.33978363132007 , lng:137.88403655983066 },
    { name: "清龍山長円寺", url: "https://chouenji.info/", x: 0.53, y: 0.614 , lat:35.985137082853484 , lng:138.20452549603553 },
  ],

  waterfall: [
    { name: "蓼科大滝", url: "https://tateshina.ne.jp/spot/guide_12.html", x: 0.6, y: 0.543, lat: 36.058564118172306,lng:138.26710462164564  },
    { name: "白糸の滝", url: "https://karuizawa-kankokyokai.jp/spot/23206/", x: 0.79, y: 0.4 , lat:36.411091 , lng:138.594427 },
    { name: "雷滝", url: "https://shinshu-takayama-onsenkyo.com/facility/kaminaridaki/", x: 0.71, y: 0.271 , lat:36.670610609065335 , lng:138.42524371825652 },
    { name: "善五郎の滝", url: "https://db.go-nagano.net/topics_detail6/id=18460", x: 0.28, y: 0.5 , lat:36.118782 , lng:137.622122 },
    { name: "田立の滝", url: "https://db.go-nagano.net/topics_detail6/id=5627", x: 0.24, y: 0.729 , lat:35.620516052843264 , lng:137.54736585752158 },
    { name: "姿見不動滝", url: "https://db.go-nagano.net/topics_detail6/id=5025", x: 0.31, y: 0.829 , lat:35.4815 , lng:137.69917 },
    { name: "男滝女滝", url: "https://db.go-nagano.net/topics_detail6/id=5618", x: 0.26, y: 0.771 , lat:35.554651 , lng:137.588831 },
    { name: "御三甕の滝", url: "https://db.go-nagano.net/topics_detail6/id=3893", x: 0.75, y: 0.557 , lat:36.041555 , lng:138.539684 },
    { name: "不動滝", url: "https://db.go-nagano.net/topics_detail6/id=4294", x: 0.58, y: 0.457 , lat:35.588170 , lng:137.831673 },
  ],

  souvenir: [
    { name: "道の駅いくさかの郷", url: "https://www.village.ikusaka.nagano.jp/ikusakanosato/", x: 0.43, y: 0.386 , lat:36.424611 , lng:137.932669 },
    { name: "道の駅あおき", url: "https://db.go-nagano.net/topics_detail6/id=12083", x: 0.54, y: 0.407 , lat:36.37246192691652 , lng:138.1403740400143 },
    { name: "上田道と川の駅おとぎの里", url: "https://www.otoginosato.jp/", x: 0.59, y: 0.386, lat:36.406532 , lng:138.205181 },
    { name: "道の駅雷電くるみの里", url: "https://raidenkurumi.jp/", x: 0.68, y: 0.414 , lat:36.35571815091406 , lng:138.3739416958353},
    { name: "道の駅アルプス安曇野ほりがねの里", url: "https://horigane.co.jp/", x: 0.4, y: 0.457, lat:36.29335084056111 , lng:137.87794525535304 },
    { name: "道の駅小坂田公園", url: "https://osakada-park.jp/", x: 0.44, y: 0.543, lat:36.10632964460391 , lng:137.98819352918926 },
    { name: "道の駅八千穂高原", url: "https://yachi-michi.com/", x: 0.7, y: 0.5, lat:36.12889941565543 , lng:138.4654075859021 },
    { name: "道の駅ビーナスライン翆科湖", url: "https://tateshina.ne.jp/shopping/venus_line.html", x: 0.6, y: 0.557, lat:36.05178528400654 , lng:138.25773664715632 },
    { name: "道の駅大芝高原", url: "https://oshiba.jp/", x: 0.42, y: 0.629, lat:35.88690459529969 , lng:137.94394947308018 },
    { name: "道の駅南アルプスむら長谷", url: "https://www.inacity.jp/shisetsu/kankoshisetsu/minamialpsmura.html", x: 0.51, y: 0.664, lat:35.81025359727348 , lng:138.08334599980276 },
    { name: "道の駅田切の里", url: "https://www.tagirinosato.jp/", x: 0.42, y: 0.729, lat:35.69081967118465 , lng:137.9399277851349 },
  ],
};

const mapContainer = document.getElementById("map-container");
const buttonContainer = document.getElementById("category-buttons");
const checkboxContainer = document.getElementById("checkbox-container");

let activeCategories = new Set();
let selectedSpots = [];

// カテゴリボタン切替
buttonContainer.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  const category = e.target.dataset.category;

  if (activeCategories.has(category)) {
    activeCategories.delete(category);
    e.target.classList.remove("active");
    removeMarkers(category);
  } else {
    activeCategories.add(category);
    e.target.classList.add("active");
    addMarkers(category);
  }
});

// ツールチップ作成
const tooltip = document.createElement("div");
tooltip.className = "tooltip";
document.body.appendChild(tooltip);

let tooltipVisible = false;
let hideTimeout = null;

tooltip.addEventListener("mouseenter", () => {
  tooltipVisible = true;
  clearTimeout(hideTimeout);
});

tooltip.addEventListener("mouseleave", () => {
  tooltipVisible = false;
  hideTimeout = setTimeout(() => {
    tooltip.style.display = "none";
  }, 600);
});

// マーカー追加関数
function addMarkers(category) {
  const mapRect = mapContainer.getBoundingClientRect();

  markersData[category].forEach((spot) => {
    const marker = document.createElement("div");
    marker.className = `marker ${category}`;
    marker.dataset.name = spot.name;
    marker.dataset.url = spot.url;
    marker.dataset.category = category;

    const leftPx = spot.x * mapRect.width;
    const topPx = spot.y * mapRect.height;

    marker.style.left = leftPx + "px";
    marker.style.top = topPx + "px";

    // クリックで選択トグル
    marker.addEventListener("click", () => {
      marker.classList.toggle("active");
      toggleSelection(spot);
    });

    // ツールチップ表示
    marker.addEventListener("mouseenter", (e) => {
      clearTimeout(hideTimeout);
      tooltip.innerHTML = `<strong>${spot.name}</strong><br><a href="${spot.url}" target="_blank">${spot.url}</a>`;
      tooltip.style.display = "block";

      const rect = e.target.getBoundingClientRect();
      let tooltipX = rect.right + 5;
      let tooltipY = rect.top + window.scrollY - tooltip.offsetHeight - 5;

      tooltipX = Math.min(tooltipX, window.innerWidth - tooltip.offsetWidth - 5);
      tooltipY = Math.max(tooltipY, 5 + window.scrollY);

      tooltip.style.left = tooltipX + "px";
      tooltip.style.top = tooltipY + "px";

      tooltipVisible = true;
    });

    marker.addEventListener("mouseleave", () => {
      hideTimeout = setTimeout(() => {
        if (!tooltipVisible) tooltip.style.display = "none";
      }, 600);
      tooltipVisible = false;
    });

    mapContainer.appendChild(marker);
  });
}

// マーカー削除
function removeMarkers(category) {
  document.querySelectorAll(`.marker.${category}`).forEach((el) => el.remove());
}

// 選択トグル
function toggleSelection(spot) {
  const index = selectedSpots.findIndex((s) => s.name === spot.name);
  if (index >= 0) {
    selectedSpots.splice(index, 1);
  } else {
    selectedSpots.push(spot);
  }
  updateCheckboxes();
}

function updateCheckboxes() {
  checkboxContainer.innerHTML = "";
  selectedSpots.forEach((spot) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = true;

    checkbox.addEventListener("change", () => {
      if (!checkbox.checked) {
        selectedSpots = selectedSpots.filter(s => s.name !== spot.name);
        const marker = document.querySelector(`.marker[data-name="${spot.name}"]`);
        if (marker) {
          marker.classList.remove("active");
        }
        updateCheckboxes();
      }
    });

    label.appendChild(checkbox);
    label.append(" " + spot.name);
    checkboxContainer.appendChild(label);
  });

  // ★追加：Google Maps 側に反映
  updateWaypointsSelect();
}


// ウィンドウリサイズ時にマーカーの位置を再計算
window.addEventListener("resize", () => {
  const mapRect = mapContainer.getBoundingClientRect();

  document.querySelectorAll(".marker").forEach(marker => {
    const category = marker.dataset.category;
    const spot = markersData[category].find(s => s.name === marker.dataset.name);
    if (spot) {
      const leftPx = spot.x * mapRect.width;
      const topPx = spot.y * mapRect.height;
      marker.style.left = leftPx + "px";
      marker.style.top = topPx + "px";
    }
  });
});

let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow .slide");

function showSlides() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 3000);
}

showSlides();

// ルート検索HTML側の waypoint セレクトに反映
function updateWaypointsSelect() {
  const waypointSelect = document.getElementById("waypoints");
  if (!waypointSelect) return;  // まだGoogle Maps側が読み込まれてない時の対策

  waypointSelect.innerHTML = ""; // 一旦クリア

  selectedSpots.forEach((spot) => {
    const option = document.createElement("option");
    option.value = `${spot.lat}, ${spot.name}`;  // ← 本当は経度緯度が理想（後述）
    option.textContent = spot.name;
    option.selected = true; // デフォルトで選択
    waypointSelect.appendChild(option);
  });
}

document.getElementById("decide-btn").addEventListener("click", (e) => {
  e.preventDefault();

  if (selectedSpots.length < 2) {
    alert("開始地点と終了地点を2つ以上選択してください");
    return;
  }

  const start = `${selectedSpots[0].lat},${selectedSpots[0].lng}`;
  const end = `${selectedSpots[selectedSpots.length - 1].lat},${selectedSpots[selectedSpots.length - 1].lng}`;

  const waypoints = selectedSpots
    .slice(1, -1)
    .map(s => `${s.lat},${s.lng}`)
    .join("|");
  
  // ★ 追加：地点名を | 区切りで渡す
  const names = selectedSpots
    .map(s => s.name)
    .join("|");

  const url =
    `/drivey/api?start=${encodeURIComponent(start)}` +
    `&end=${encodeURIComponent(end)}` +
    `&waypoints=${encodeURIComponent(waypoints)}`;
    `&names=${encodeURIComponent(names)}`; // ★ 追加


  window.location.href = url;
});


