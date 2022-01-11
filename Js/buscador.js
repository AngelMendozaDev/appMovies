function MultiSerch(name) {
    let url
    switch ($('#tipo').val()) {
        case "M":
            url = name.trim() != "" ? baseURL + "search/multi?" + APIkey + "&query=" + name + "&page=1,2&include_adult=false" : baseURL + "trending/all/day?" + APIkey;
            break;
        case "P":
            url = name.trim() != "" ? baseURL + "search/movie?" + APIkey + "&query=" + name + "&page=1&include_adult=true" : baseURL + "discover/movie?sort_by=popularity.desc&" + APIkey;
            break;
        case "TV":
            url = name.trim() != "" ? baseURL + "search/tv?" + APIkey + "&query=" + name + "&page=1&include_adult=true" : baseURL + "tv/popular?" + APIkey;
            break;
    }
    let object;
    fetch(url).then(res => res.json()).then(data => {
        //console.log(data.results);
        $('#catalogo').empty();
        switch ($('#tipo').val()) {
            case "M":
                addCatalogo(data.results);
                break;
            case "P":
                addCatalogoM(data.results);
                break;
            case "TV":
                addCatalogoS(data.results);
                break;
        }
    });
}


function addCatalogo(object) {
    if (object.length <= 0) {
        $('#catalogo').append("<div class='alert alert-danger' role='alert'>" +
            "No se encontraron Coincidencias" +
            "</div>");
    }
    let image;
    $.each(object, function(key, data) {
        //console.log(data.poster_path);
        if (data.poster_path != null)
            image = imageBase + data.poster_path
        else
            image = "Media/no-image.jpg"

        if (data.media_type == "tv") {
            $('#catalogo').append("<div class='col-6 col-md-3 my-card' onclick='getInfoSerie(" + data.id + ")' data-bs-toggle='modal' data-bs-target='#ModalDetails'>" +
                "<div class='poster-box'>" +
                "<img src='" + image + "'>" +
                "</div>" +
                "<div class='info-item'>" +
                "<h5 class='title-item'>" + data.name + "</h5>" +
                "<span class='puntos'>" + data.vote_average + "</span>" +
                "</div>" +
                "</div>");
        } else if (data.media_type == "movie") {
            $('#catalogo').append("<div class='col-6 col-md-3 my-card' onclick='getInfoMovie(" + data.id + ")' data-bs-toggle='modal' data-bs-target='#ModalDetails'>" +
                "<div class='poster-box'>" +
                "<img src='" + image + "'>" +
                "</div>" +
                "<div class='info-item'>" +
                "<h5 class='title-item'>" + data.title + "</h5>" +
                "<span class='puntos'>" + data.vote_average + "</span>" +
                "</div>" +
                "</div>");
        }
    });
}

function addCatalogoM(object) {
    let image;

    if (object.length <= 0) {
        $('#catalogo').append("<div class='alert alert-danger' role='alert'>" +
            "No se encontraron Coincidencias" +
            "</div>");
    }

    $.each(object, function(key, data) {
        //console.log(data.poster_path);
        if (data.poster_path != null)
            image = imageBase + data.poster_path
        else
            image = "Media/no-image.jpg"

        $('#catalogo').append("<div class='col-6 col-md-3 my-card' onclick='getInfoMovie(" + data.id + ")' data-bs-toggle='modal' data-bs-target='#ModalDetails'>" +
            "<div class='poster-box'>" +
            "<img src='" + image + "'>" +
            "</div>" +
            "<div class='info-item'>" +
            "<h5 class='title-item'>" + data.title + "</h5>" +
            "<span class='puntos'>" + data.vote_average + "</span>" +
            "</div>" +
            "</div>");

    });
}

function addCatalogoS(object) {
    let image;

    if (object.length <= 0) {
        $('#catalogo').append("<div class='alert alert-danger' role='alert'>" +
            "No se encontraron Coincidencias" +
            "</div>");
    }

    $.each(object, function(key, data) {
        //console.log(data.poster_path);
        if (data.poster_path != null)
            image = imageBase + data.poster_path
        else
            image = "Media/no-image.jpg"

        $('#catalogo').append("<div class='col-6 col-md-3 my-card' onclick='getInfoSerie(" + data.id + ")' data-bs-toggle='modal' data-bs-target='#ModalDetails'>" +
            "<div class='poster-box'>" +
            "<img src='" + image + "'>" +
            "</div>" +
            "<div class='info-item'>" +
            "<h5 class='title-item'>" + data.name + "</h5>" +
            "<span class='puntos'>" + data.vote_average + "</span>" +
            "</div>" +
            "</div>");

    });
}
/***********************
 * Get Info To Modal
 */

function getInfoMovie(id) {
    let url_get_info = baseURL + "movie/" + id + "?" + APIkey;
    let image;
    //console.log(url_get_info)
    fetch(url_get_info).then(res => res.json()).then(data => {
        //console.log(data)
        image = data.poster_path != null ? imageBase + data.poster_path : "Media/no-image.jpg";
        fecha = data.last_air_date != null ? "[" + data.last_air_date + "]" : ""

        $('#ModalDetailsLabel').html(data.title + fecha)
        $('#img-details').attr("src", image);
        $('.title-movie').html(data.title);
        $('.date-movie').html(data.release_date);
        $('.description-movie').html(data.overview ? data.overview : "Información No disponible");

        /**Productores */
        //console.log(data.production_companies);

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
    let image;
    //console.log(url_get_info)
    fetch(url_get_info).then(res => res.json()).then(data => {
        //console.log(data)
        image = data.poster_path != null ? imageBase + data.poster_path : "Media/no-image.jpg"
        fecha = data.last_air_date != null ? "[" + data.last_air_date + "]" : ""

        $('#ModalDetailsLabel').html(data.name + fecha)
        $('#img-details').attr("src", image);
        $('.title-movie').html(data.name);
        $('.date-movie').html(data.last_air_date);
        $('.description-movie').html(data.overview ? data.overview : "Información No disponible");

        /**Productores */
        //console.log(data.production_companies);

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

$('#serch-in').keyup(function(evt) {
    MultiSerch($('#serch-in').val());
})