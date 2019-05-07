/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var saved = document.getElementById('fav');
var buttonChange = document.getElementById('popup');

saved.onclick = function () {
    if (saved.src.includes("empty%20heart.png")) {
        saved.src = "../Images/full%20heart.png";
        buttonChange.classList.toggle('hidden');
    } else {
        (saved.src.includes("full%20heart.png"));
        saved.src = "../Images/empty%20heart.png";
        buttonChange.classList.toggle('hidden');
    }
};
