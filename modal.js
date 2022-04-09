const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-button");

window.addEventListener("load", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
  window.location.href = "contact.html";
});

/* Helpful Resources */

/* 

How to Redirect to another Webpage - https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
Create a pop-up modal the SUPER EASY way - https://www.youtube.com/watch?v=TAB_v6yBXIE 

*/
