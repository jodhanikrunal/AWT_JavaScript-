let page = 0;
var data = new Array();
data.push(["Raj", "21ce027@charusat.edu.in", "Rajkot"]);
data.push(["Arayn", "21it022@charusat.edu.in", "Keshod"]);
data.push(["Om", "om007@gmail.com", "Rajkot"]);
data.push(["Krunal", "krunal@gmail.com", "Junagadh"]);
data.push(["Pranshu", "pranshu45@gmail.com", "Rajkot"]);
data.push(["Utsav", "utsav@gmail.com", "Adajan"]);
data.push(["Meet", "meet2143@gmail.com", "Surat"]);

function load() {
  console.warn("loaded");
  createTable(data);
  createButtons();
}

function createTable(arr, start = 0) {
  var table = document.getElementById("tbl").getElementsByTagName("tbody")[0];
  table.innerHTML = "";
  var end = Math.min(start + 5, arr.length);
  for (var i = start; i < end; i++) {
    var row = table.insertRow(-1);

    for (const data of arr[i]) {
      var cell = row.insertCell(-1);
      cell.innerHTML = data;
    }
  }
}

function createButtons() {
  var body = document.getElementById("body");
  var div = document.createElement("div");

  // Prev Button
  var prevBtn = document.createElement("button");
  prevBtn.onclick = function () {
    if (page > 0) {
      page--;
      var start = page * 5;
      createTable(data, start);
    }
  };
  prevBtn.innerHTML = "Prev";
  div.appendChild(prevBtn);

  // Numbers
  var btns = Math.ceil(data.length / 5);
  for (var i = 0; i < btns; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = i + 1;
    btn.value = i;
    btn.onclick = function () {
      NumberClick(this.value);
    };
    div.appendChild(btn);
  }

  // Next Button
  var nextBtn = document.createElement("button");
  nextBtn.onclick = function () {
    var start = (page + 1) * 5;
    if (start < data.length) {
      page++;
      createTable(data, start);
    }
  };
  nextBtn.innerHTML = "Next";
  div.appendChild(nextBtn);

  // All buttons to div
  body.appendChild(div);
}

function NumberClick(pg) {
  page = parseInt(pg);
  createTable(data, page * 5);
}