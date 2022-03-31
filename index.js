var form = document.querySelector('form')

var names = document.getElementById("fname")
var lnames = document.getElementById("lname")
var emails = document.getElementById("email")


let phones = document.querySelector('#phone');



form.onsubmit = function (e) {
    e.preventDefault()
 
 
    names.textContent
    console.log(names.value)

    lnames.textContent
    console.log(lnames.value)

    emails.textContent
    console.log(emails.value)
    
   
    console.log(phones.value)
 
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}