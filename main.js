/*
$ curl https://api.unsplash.com/search/photos?query=canada █

let key = vrFpy-bk81H1g7cSVsBsgblBCFkj46ARiO_tM7QMueY


*/

let body2 = document.getElementById('body1');
let conta = document.getElementById('container');
let search_bx = document.getElementById('search_input');




let search_val = search_bx.value;
if (search_bx.value == false) {
    search_val = 'japan'
}





let link = "https://api.unsplash.com/search/photos?query=" + search_val + "&client_id=vrFpy-bk81H1g7cSVsBsgblBCFkj46ARiO_tM7QMueY&per_page=1"

function search_image() {
    search_val = '';
    search_val = $("#search_input").val();
    console.log(search_val);
};


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