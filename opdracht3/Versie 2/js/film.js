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

//stap 1: maak html elementen aan//
    //film 1
    var article1 = document.createElement('article');
    var title1 = document.createElement('h2');
    var img1 = document.createElement('img');
    var button1 = document.createElement('input');

    var section1 = document.createElement('section');
    var para1 = document.createElement('p');
    var genre1 = document.createElement('p');
    var actors1 = document.createElement('p');

    //film 2
    var article2 = document.createElement('article');
    var title2 = document.createElement('h2');
    var img2 = document.createElement('img');
    var button2 = document.createElement('input');
    var para2 = document.createElement('p');

    var section2 = document.createElement('section');
    var para2 = document.createElement('p');
    var genre2 = document.createElement('p');
    var actors2 = document.createElement('p');

    //film 3
    var article3 = document.createElement('article');
    var title3 = document.createElement('h2');
    var img3 = document.createElement('img');
    var button3 = document.createElement('input');
    var para2 = document.createElement('p');

    var section3 = document.createElement('section');
    var para3 = document.createElement('p');
    var genre3 = document.createElement('p');
    var actors3 = document.createElement('p');
//einde html elementen//

//stap 2: koppelen de json data aan de html elementen
    section1.className = ('info1');
    title1.textContent = jsonObj[0].title;
    img1.setAttribute ('src', jsonObj[0].cover);
    button1.value = 'Meer info';
    button1.className = ('toggle');
    para1.textContent = jsonObj[0].simple_plot;
    genre1.textContent = 'Genre: ' + jsonObj[0].genres;
    actors1.textContent = 'Actors: ' + jsonObj[0].actors[0].actor_name + ', ' + jsonObj[0].actors[1].actor_name + ', ' + jsonObj[0].actors[2].actor_name + ', ' + jsonObj[0].actors[3].actor_name;

    section2.className = ('info2');
    title2.textContent = jsonObj[1].title;
    img2.setAttribute ('src', jsonObj[1].cover);
    button2.value = 'Meer info';
    button2.className = ('toggle');
    para2.textContent = jsonObj[1].simple_plot;
    genre2.textContent = 'Genre: ' + jsonObj[1].genres;
    actors2.textContent = 'Actors: ' + jsonObj[1].actors[0].actor_name + ', ' + jsonObj[1].actors[1].actor_name + ', ' + jsonObj[1].actors[2].actor_name + ', ' + jsonObj[1].actors[3].actor_name;

    section3.className = ('info3');
    title3.textContent = jsonObj[2].title;
    img3.setAttribute ('src', jsonObj[2].cover);
    button3.value = 'Meer info';
    button3.className = ('toggle');
    para3.textContent = jsonObj[2].simple_plot;
    genre3.textContent = 'Genre: ' + jsonObj[2].genres;
    actors3.textContent = 'Actors: ' + jsonObj[2].actors[0].actor_name + ', ' + jsonObj[2].actors[1].actor_name + ', ' + jsonObj[2].actors[2].actor_name + ', ' + jsonObj[2].actors[3].actor_name;

//stap 3: voeg de elemtenn toe aan de section (append)
    article1.appendChild(title1);
    article1.appendChild(img1);
    section1.appendChild(para1)
    section1.appendChild(genre1);
    section1.appendChild(actors1);
    article1.appendChild(button1);
    section.appendChild(article1);
    section.appendChild(section1);

    article2.appendChild(title2);
    article2.appendChild(img2);
    section2.appendChild(para2)
    section2.appendChild(genre2);
    section2.appendChild(actors2);
    article2.appendChild(button2);
    section.appendChild(article2);
    section.appendChild(section2);

    article3.appendChild(title3);
    article3.appendChild(img3);
    section3.appendChild(para3)
    section3.appendChild(genre3);
    section3.appendChild(actors3);
    article3.appendChild(button3);
    section.appendChild(article3);
    section.appendChild(section3);

    button1.onclick = function () {
    if (button1.value == "Meer info") {
        button1.value = "Minder info";
        section1.classList.toggle('info1');
    }else
    if (button1.value == "Minder info") {
        button1.value = "Meer info";
        section1.classList.toggle('info1');
    }
};
    button2.onclick = function () {
    if (button2.value == "Meer info") {
        button2.value = "Minder info";
        section2.classList.toggle('info2');
    }else
    if (button2.value == "Minder info") {
        button2.value = "Meer info";
        section2.classList.toggle('info2');
    }
};

    button3.onclick = function () {
    if (button3.value == "Meer info") {
        button3.value = "Minder info";
        section3.classList.toggle('info3');
    }else
    if (button3.value == "Minder info") {
        button3.value = "Meer info";
        section3.classList.toggle('info3');
    }
};

};


