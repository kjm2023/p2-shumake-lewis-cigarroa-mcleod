
// Wildlife Live

const newsClip = document.querySelector('#myNews');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'wildlife-live1.p.rapidapi.com',
		'X-RapidAPI-Key': '866face455mshaae3935587f6311p129b43jsn2b2d1c04afde'
	}
};

fetch('https://wildlife-live1.p.rapidapi.com/news', options)
    .then(function(responseFromApi) {
        return responseFromApi.json();
    })
	
    .then(function(resultingJson) {

        let randomNum = Math.floor(Math.random() * resultingJson.length);
        let articleTitle = resultingJson[randomNum]['title'];
        let articleUrl = resultingJson[randomNum]['url'];
        let articleSource = resultingJson[randomNum]['source'];

        // Populate news article in paragraph
        newsClip.innerHTML = `
        <p class="article-style">${articleTitle}</p>
        <p class="article-style"><a href="${articleUrl}">${articleSource}</a></p>`;
        
    })   
	.catch(err => console.error(err));

    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
    
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }

