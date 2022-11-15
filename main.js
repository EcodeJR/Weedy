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
let day0 = document.getElementById('day');

setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    day0.innerHTML = weekday[d.getDay()];
}, 1000);


//weather app
let city = document.getElementById('city');
/*
search_btn.addEventListener('click', function() {
    
})*/


function search_image() {
    city.innerHTML = search_bx.value;
    search_bx.value = '';
};
search_val = search_bx.value;


//geting user location
const findmylocation = () => {


    const success = (position) => {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const locationApi = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

        fetch(locationApi)
            .then(res => res.json())
            .then(data => {
                city.innerHTML = data.city
            })

    }


    const error = () => {
        city.innerHTML = 'Unadle to get Location';
    }

    navigator.geolocation.getCurrentPosition(success, error);


}

window.addEventListener('load', findmylocation);