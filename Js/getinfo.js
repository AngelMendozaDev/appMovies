let url = baseURL + "discover/movie?sort_by=popularity.desc&" + APIkey;
let url_now = baseURL + "movie/now_playing?" + APIkey;
let url_series_popular = baseURL + "tv/popular?" + APIkey;
let url_on_air = baseURL + "tv/on_the_air?" + APIkey;

/***Obtenemos Info */
getMorePopular(url);
getPlayNow(url_now);
getSeriesMorePopular(url_series_popular);
getSeriesOnAir(url_on_air);

function getMorePopular(url) {
    let object;
    let title = 1;
    fetch(url).then(res => res.json()).then(data => {
        //console.log(data.results);
        object = data.results;
        $.each(object, function(key, value) {
            $('#lienzo-popular').append("<div class='col-4 col-3 movie' data-bs-toggle='modal' data-bs-target='#ModalDetails' onclick='getInfoMovie(" + value.id + ")'>" +
                "<img src = '" + imageBase + value.poster_path + "'>" +
                "<div class = 'movie-info'>" +
                "<h3 class = 'title-movie'>" + value.title + "</h3>" +
                "<span class = 'puntuacion'>" + value.vote_average + "</span>" +
                "</div>" +
                "</div>");
            title++;
        });
        new Glider(document.querySelector('#lienzo-popular'), {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            dots: '.indicadores-popular',
            arrows: {
                prev: '.btn-left-popular',
                next: '.btn-right-popular'
            },
            responsive: [{
                // screens greater than >= 775px
                breakpoint: 775,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    itemWidth: 150,
                    duration: 0.25
                }
            }, {
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    itemWidth: 150,
                    duration: 0.25
                }
            }]
        });
    });
}

function getPlayNow(url) {
    let object;
    let title = 1;
    fetch(url).then(res => res.json()).then(data => {
        //console.log(data.results);
        object = data.results;
        $.each(object, function(key, value) {
            $('#lienzo-PlayN').append("<div class='col-4 col-3 movie' data-bs-toggle='modal' data-bs-target='#ModalDetails' onclick='getInfoMovie(" + value.id + ")'> " +
                "<img src = '" + imageBase + value.poster_path + "'>" +
                "<div class = 'movie-info'>" +
                "<h3 class = 'title-movie'>" + value.title + "</h3>" +
                "<span class = 'puntuacion'>" + value.vote_average + "</span>" +
                "</div>" +
                "</div>");
            title++;
        });
        new Glider(document.querySelector('#lienzo-PlayN'), {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            dots: '.indicadores-playN',
            arrows: {
                prev: '.btn-left-playN',
                next: '.btn-right-playN'
            },
            responsive: [{
                // screens greater than >= 775px
                breakpoint: 775,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    itemWidth: 150,
                    duration: 0.25
                }
            }, {
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    itemWidth: 150,
                    duration: 0.25
                }
            }]
        });
    });
}

/* Series*/

function getSeriesMorePopular(url) {
    let object;
    let title = 1;
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        object = data.results;
        $.each(object, function(key, value) {
            $('#lienzo-Spopular').append("<div class='col-4 col-3 movie' data-bs-toggle='modal' data-bs-target='#ModalDetails' onclick='getInfoSerie(" + value.id + ")'>" +
                "<img src = '" + imageBase + value.poster_path + "'>" +
                "<div class = 'movie-info'>" +
                "<h3 class = 'title-movie'>" + value.name + "</h3>" +
                "<span class = 'puntuacion'>" + value.vote_average + "</span>" +
                "</div>" +
                "</div>");
            title++;
        });
        new Glider(document.querySelector('#lienzo-Spopular'), {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            dots: '.indicadores-series1',
            arrows: {
                prev: '.btn-left-series1',
                next: '.btn-right-series1'
            },
            responsive: [{
                // screens greater than >= 775px
                breakpoint: 775,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    itemWidth: 150,
                    duration: 0.25
                }
            }, {
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    itemWidth: 150,
                    duration: 0.25
                }
            }]
        });
    });
}

function getSeriesOnAir(url) {
    let object;
    let title = 1;
    fetch(url).then(res => res.json()).then(data => {
        //console.log(data.results);
        object = data.results;
        $.each(object, function(key, value) {
            $('#lienzo-SPlayN').append("<div class='col-4 col-3 movie' data-bs-toggle='modal' data-bs-target='#ModalDetails' onclick='getInfoSerie(" + value.id + ")'>" +
                "<img src = '" + imageBase + value.poster_path + "'>" +
                "<div class = 'movie-info'>" +
                "<h3 class = 'title-movie'>" + value.name + "</h3>" +
                "<span class = 'puntuacion'>" + value.vote_average + "</span>" +
                "</div>" +
                "</div>");
            title++;
        });
        new Glider(document.querySelector('#lienzo-SPlayN'), {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            dots: '.indicadores-series2',
            arrows: {
                prev: '.btn-left-series2',
                next: '.btn-right-series2'
            },
            responsive: [{
                // screens greater than >= 775px
                breakpoint: 775,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    itemWidth: 150,
                    duration: 0.25
                }
            }, {
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    itemWidth: 150,
                    duration: 0.25
                }
            }]
        });
    });
}

/***********************
 * Get Info To Modal
 */

function getInfoMovie(id) {
    let url_get_info = baseURL + "movie/" + id + "?" + APIkey;
    console.log(url_get_info)
    fetch(url_get_info).then(res => res.json()).then(data => {
        console.log(data)
        $('#ModalDetailsLabel').html(data.title + " [" + data.release_date + "]")
        $('#img-details').attr("src", imageBase + data.poster_path);
        $('.title-movie').html(data.title);
        $('.date-movie').html(data.release_date);
        $('.description-movie').html(data.overview);

        /**Productores */
        console.log(data.production_companies);

        $('.production').empty(); //Eliminamos basura anterior
        $.each(data.production_companies, function(key, value) {
            if (value.logo_path != null) {
                $('.production').append("<li class='companie-item'>" +
                    "<img src='" + imageBase + value.logo_path + "'>" +
                    "<h5 class='companie-name'>" + value.name + "</h5>" +
                    "</li>");
            } else {
                $('.production').append("<li class='companie-item'>" +
                    "<img src='Media/no-picture.png'>" +
                    "<h5 class='companie-name'>" + value.name + "</h5>" +
                    "</li>");
            }
        })
    });
}

function getInfoSerie(id) {
    let url_get_info = baseURL + "tv/" + id + "?" + APIkey;
    //console.log(url_get_info)
    fetch(url_get_info).then(res => res.json()).then(data => {
        console.log(data)
        $('#ModalDetailsLabel').html(data.name + " [" + data.last_air_date + "]")
        $('#img-details').attr("src", imageBase + data.poster_path);
        $('.title-movie').html(data.name);
        $('.date-movie').html(data.last_air_date);
        $('.description-movie').html(data.overview);

        /**Productores */
        console.log(data.production_companies);

        $('.production').empty(); //Eliminamos basura anterior
        $.each(data.production_companies, function(key, value) {
            if (value.logo_path != null) {
                $('.production').append("<li class='companie-item'>" +
                    "<img src='" + imageBase + value.logo_path + "'>" +
                    "<h5 class='companie-name'>" + value.name + "</h5>" +
                    "</li>");
            } else {
                $('.production').append("<li class='companie-item'>" +
                    "<img src='Media/no-picture.png'>" +
                    "<h5 class='companie-name'>" + value.name + "</h5>" +
                    "</li>");
            }
        })
    });
}