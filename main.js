/*
$ curl https://api.unsplash.com/search/photos?query=canada

let key = vrFpy-bk81H1g7cSVsBsgblBCFkj46ARiO_tM7QMueY
*/
let body2 = document.getElementById('body1');
let conta = document.getElementById('container');
let search_bx = document.getElementById('search_input');
let search_btn = document.getElementById('btn');



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

/*
search_btn.addEventListener('click', function() {
    
})*/




//geting user location
const findmylocation = () => {
    let city = document.getElementById('city');

    const success = (position) => {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const locationApi = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

        fetch(locationApi)
            .then(responde => responde.json())
            .then(data => {
                city.innerHTML = data.city
                weatherApp.fetchWeather(city.innerHTML)
                document.getElementById('body1').style.background = "url('https://source.unsplash.com/1600x900/?" + data.city + "')";
            })

    }
    const error = () => {
        city.innerHTML = 'Unable to get location';
    }

    navigator.geolocation.getCurrentPosition(success, error);
}



//weather
let weatherApp = {
    "apiKey": "fe456a7eb185bad555b83268ec33960e",
    fetchWeather: function(city) {
        fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&appid=" +
                this.apiKey)
            .then((res) => res.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon } = data.weather[0];
        const { description } = data.weather[0];
        const { temp } = data.main;
        city.innerHTML = name;
        document.getElementById('degree').innerHTML = temp + "°C";
        document.getElementById('icon').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.getElementById('description').innerText = description;
        document.querySelector('.weather_info').classList.remove('loading');
        document.getElementById('body1').style.background = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function() {
        this.fetchWeather(search_bx.value);
    }

};

function search_image() {
    weatherApp.search();
    city.innerHTML = search_bx.value;
    search_bx.value = '';
};
/*
search_btn.addEventListener('keyup', function() {
    if (event.key == "Enter") {
        weatherApp.search();
    }
});*/

/*
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
*/

window.addEventListener('load', findmylocation);
window.addEventListener('load', weatherApp.fetchWeather(city.innerHTML));