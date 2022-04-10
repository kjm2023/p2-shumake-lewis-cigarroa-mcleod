function readMore() {
  var readtxt = document.getElementById("readmoretxt");
  var moreText = document.getElementById("morecontent");

  if (readtxt.style.display === "none") {
    readtxt.style.display = "inline";
    readtxt.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    readtxt.style.display = "none";
    readtxt.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

function readMoreOceans() {
    var readocean = document.getElementById("oceantxt");
  var oceantxt = document.getElementById("oceancontent");

  if (readocean.style.display === "none") {
    readocean.style.display = "inline";
    readocean.innerHTML = "Read More";
    oceantxt.style.display = "none";
  } else {
    readocean.style.display = "none";
    readocean.innerHTML = "Read Less";
    oceantxt.style.display = "inline";
  }
}

function readMoreFreshwater() {
    var freshtxt = document.getElementById("freshwatertxt");
  var morefreshtxt = document.getElementById("freshcontent");

  if (freshtxt.style.display === "none") {
    freshtxt.style.display = "inline";
    freshtxt.innerHTML = "Read More";
    morefreshtxt.style.display = "none";
  } else {
    freshtxt.style.display = "none";
    freshtxt.innerHTML = "Read Less";
    morefreshtxt.style.display = "inline";
  }
}

function readMoreGrass() {
    var grtxt = document.getElementById("readgrass");
  var grasstxt = document.getElementById("grasslands");

  if (grtxt.style.display === "none") {
    grtxt.style.display = "inline";
    grtxt.innerHTML = "Read More";
    grasstxt.style.display = "none";
  } else {
    grtxt.style.display = "none";
    grtxt.innerHTML = "Read Less";
    grasstxt.style.display = "inline";
  }
}

