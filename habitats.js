function readMore() {
  var dots = document.getElementById("ellipsis");
  var buttonText = document.getElementById("readmorebtn");
  var moreText = document.getElementById("morecontent");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    buttonText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    buttonText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}
