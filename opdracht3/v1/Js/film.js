var section = document.querySelector('section'); //Hier komt Json data//
var article = document.querySelector('article');

var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

//Json data laden//
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
console.log('request', request);

//Als data er is word onload aangeroepen//
request.onload = function () {
    //console.log("data onload?",request.response);
    showMovies(request.response);
};

/*
    deze functie verwerkt de json data
    en maakt html elementen aan
    en zet deze op de pagina (in de dom)
    argument: json van de request
*/

function showMovies(jsonObj) {
    console.log("function showmovies",jsonObj)

    //stap 1: maak html elementen aan
    var article1 = document.createElement('article');
    var title1 = document.createElement('h2');
    var para1 = document.createElement('p');
    var img1 = document.createElement('img');
    var link = document.createElement('a');

    var article2 = document.createElement('article');
    var title2 = document.createElement('h2');
    var para2 = document.createElement('p');
    var img2 = document.createElement('img');

    var article3 = document.createElement('article');
    var title3 = document.createElement('h2');
    var para3 = document.createElement('p');
    var img3 = document.createElement('img');


    //stap 2: koppelen de json data aan de html elementen
    title1.textContent = jsonObj[0].title;
    para1.textContent = jsonObj[0].simple_plot;
    img1.setAttribute ('src', jsonObj[0].cover);
    link.setAttribute('href', "Html/evil%20dead.html");

    title2.textContent = jsonObj[1].title;
    para2.textContent = jsonObj[1].simple_plot;
    img2.setAttribute ('src', jsonObj[1].cover);

    title3.textContent = jsonObj[2].title;
    para3.textContent = jsonObj[2].simple_plot;
    img3.setAttribute ('src', jsonObj[2].cover);


    //stap 3: voeg de elemtenn toe aan de section (append)
    article1.appendChild(link);
    link.appendChild(title1);
    link.appendChild(img1);
    link.appendChild(para1);
    section.appendChild(article1);

    article2.appendChild(title2);
    article2.appendChild(img2);
    article2.appendChild(para2);
    section.appendChild(article2);

    article3.appendChild(title3);
    article3.appendChild(img3);
    article3.appendChild(para3);
    section.appendChild(article3);
}

