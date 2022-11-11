/*
$ curl https://api.unsplash.com/search/photos?query=canada

let key = vrFpy-bk81H1g7cSVsBsgblBCFkj46ARiO_tM7QMueY
*/
let body2 = document.getElementById('body1');
let conta = document.getElementById('container');
let search_bx = document.getElementById('search_input');
let search_btn = document.getElementById('btn');

let search_val = 'asia';


let link = "https://api.unsplash.com/search/photos?query=" + search_val + "&client_id=vrFpy-bk81H1g7cSVsBsgblBCFkj46ARiO_tM7QMueY&per_page=1";



$.ajax({
    method: 'get',
    url: link,

    success: function(data) {
        console.log(data)

        data.results.forEach(photo => {
            $("#container").append(`
            <img src=" ${photo.urls.regular}"/>
            `);
        });



    }
})


//clock
let time = document.getElementById('time');

setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
}, 1000);


//weather app
let city = document.getElementById('city');
/*
search_btn.addEventListener('click', function() {
    
})*/


function search_image() {
    city.innerHTML = search_bx.value;

    console.log(city.innerHTML);
    search_bx.value = '';



};
search_val = search_bx.value;


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
        city.innerHTML = "Undefined";
    }
}
getLocation();

function showPosition(position) {
    city.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}
showPosition();