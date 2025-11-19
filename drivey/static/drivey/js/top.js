const markersData = { 
  onsen: [
    { name: "星野温泉トンボの湯", url: "https://www.hoshino-area.jp/tombo-no-yu/", x: 375, y: 300 },
    { name: "ひまわりの湯", url: "https://hiraya-himawarinoyu.com/", x: 140, y: 600 },
    { name: "白骨温泉公共野天風呂", url: "https://shirahone-onsen.org/", x: 140, y: 350 },
    { name: "湯の華銭湯瑞祥", url: "https://zuisho.com/", x: 200, y: 320 },
    { name: "地蔵温泉十福の湯", url: "https://zippuku.net/", x: 300, y: 250 },
    { name: "早太郎温泉", url: "https://hayataro.org/", x: 210, y: 490 },
    { name: "南相木温泉滝見の湯", url: "https://takiminoyu.com/", x: 370, y: 390 },

  ],

  shrine: [
    { name: "光前寺", url: "http://www.kozenji.or.jp/", x: 230, y: 480 },
    { name: "鳩ヶ嶺八幡宮", url: "https://hatogamine.org/", x: 190, y: 560 },
    { name: "諏訪大社", url: "https://suwataisha.or.jp/", x: 230, y: 400 },
    { name: "戸隠神社", url: "https://www.togakushi-jinja.jp/", x: 260, y: 170 },
    { name: "熊野皇大神社", url: "https://kumanokoutai.com/", x: 400, y: 275 },
    { name: "眞田神社", url: "http://sanada-jinja.com/", x: 300, y: 310 },
    { name: "真田山長谷寺", url: "http://www.chouk.or.jp/", x: 330, y: 275 },
    { name: "穂高神社", url: "https://www.hotakajinja.com/", x: 200, y: 330 },
    { name: "清龍山長円寺", url: "https://chouenji.info/", x: 265, y: 430 },


  ],
  waterfall: [
    { name: "蓼科大滝", url: "https://tateshina.ne.jp/spot/guide_12.html", x: 300, y: 380 },
    { name: "白糸の滝", url: "https://karuizawa-kankokyokai.jp/spot/23206/", x: 395, y: 280 },
    { name: "雷滝", url: "https://shinshu-takayama-onsenkyo.com/facility/kaminaridaki/", x: 355, y: 190 },
    { name: "善五郎の滝", url: "https://db.go-nagano.net/topics_detail6/id=18460", x: 140, y: 350 },
    { name: "田立の滝", url: "https://db.go-nagano.net/topics_detail6/id=5627", x: 120, y: 510 },
    { name: "姿見不動滝", url: "https://db.go-nagano.net/topics_detail6/id=5025", x: 155, y: 580 },
    { name: "男滝女滝", url: "https://db.go-nagano.net/topics_detail6/id=5618", x: 130, y: 540 },
    { name: "御三甕の滝", url: "https://db.go-nagano.net/topics_detail6/id=3893", x: 375, y: 390 },
    { name: "不動滝", url: "https://db.go-nagano.net/topics_detail6/id=4294", x: 290, y: 320 },

  ],
  souvenir: [
    { name: "道の駅いくさかの郷", url: "https://www.village.ikusaka.nagano.jp/ikusakanosato/", x: 215, y: 270 },
    { name: "道の駅あおき", url: "https://db.go-nagano.net/topics_detail6/id=12083", x: 270, y: 285 },
    { name: "上田道と川の駅おとぎの里", url: "https://www.otoginosato.jp/", x: 295, y: 270 },
    { name: "道の駅雷電くるみの里", url: "https://raidenkurumi.jp/", x: 340, y: 290 },
    { name: "道の駅アルプス安曇野ほりがねの里", url: "https://horigane.co.jp/", x: 200, y: 320 },
    { name: "道の駅小坂田公園", url: "https://osakada-park.jp/", x: 220, y: 380 },
    { name: "道の駅八千穂高原", url: "https://yachi-michi.com/", x: 350, y: 350 },
    { name: "道の駅ビーナスライン翆科湖", url: "https://tateshina.ne.jp/shopping/venus_line.html", x: 300, y: 390 },
    { name: "道の駅大芝高原", url: "https://oshiba.jp/", x: 210, y: 440 },
    { name: "道の駅南アルプスむら長谷", url: "https://www.inacity.jp/shisetsu/kankoshisetsu/minamialpsmura.html", x: 255, y: 465 },
    { name: "道の駅田切の里", url: "https://www.tagirinosato.jp/", x: 210, y: 510 },

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
  hideTimeout = setTimeout(() => { tooltip.style.display = "none"; }, 200);
});

// マーカー追加
function addMarkers(category) {
  markersData[category].forEach((spot) => {
    const marker = document.createElement("div");
    marker.className = `marker ${category}`;
    marker.dataset.name = spot.name;
    marker.dataset.url = spot.url;
    marker.style.left = spot.x + "px";
    marker.style.top = spot.y + "px";
    marker.dataset.category = category;

    // クリックで選択
    marker.addEventListener("click", () => {
      marker.classList.toggle("active"); // 今回はクリックで濃淡切替（任意）
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
      hideTimeout = setTimeout(() => { if (!tooltipVisible) tooltip.style.display = "none"; }, 200);
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

// チェックボックス更新
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
        // 対応するマーカーの active クラスも解除
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
}
