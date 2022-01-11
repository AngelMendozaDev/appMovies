<?php require_once "header.php"; ?>
<link rel="stylesheet" href="Styles/muStyles.css">
<link rel="stylesheet" href="Styles/detalles.css">

<!-- Banner -->
<div class="banner">
    <div class="content">
        <h1>Realizo: Mendoza Garcia Luis Angel</h1>
        <h3>¿Que veremos hoy ?</h3>
        <form action="catalogo.php?type=M" method="POST" class="form-serch">
            <input type="text" class="form-control" name="data" id="serch-in" placeholder="Pelicula, Serie o Actor..." required>
            <button class="btn btn-primary" id="Lupa"><i class="fa fa-search" aria-hidden="true"></i></button>
        </form>
    </div>
</div>

<!-- Most Popular -->
<div class="container mt-4 mb-3">
    <div class="row mt-4">
        <h1 class="titleCat"><i class="fa fa-film" aria-hidden="true"></i> Más Populares</h1>
        <hr>
    </div>
    <div class="cont-general">
        <div class="contenerdor-scroll">
            <button aria-label="Anterior" class="btn-scroll btn-left btn-left-popular">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </button>
            <div class="lienzo" id="lienzo-popular"></div>
            <button aria-label="Anterior" class="btn-scroll btn-right btn-right-popular">
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
        </div>
        <div role="tablist" class="indicadores-popular"></div>
    </div>

    <!-- Play Now -->
    <div class="row mt-5">
        <h1 class="titleCat">En Cartelera</h1>
        <hr>
    </div>

    <div class="cont-general">
        <div class="contenerdor-scroll">
            <button aria-label="Anterior" class="btn-scroll btn-left btn-left-playN">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </button>
            <div class="lienzo" id="lienzo-PlayN"></div>
            <button aria-label="Anterior" class="btn-scroll btn-right btn-right-playN">
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
        </div>
        <div role="tablist" class="indicadores-playN"></div>
    </div>
</div>

<!-- Most Popular -->
<div class="container mt-4 mb-3">
    <div class="row mt-4">
        <h1 class="titleCat"><i class="fa fa-tv" aria-hidden="true"></i> Series Populares</h1>
        <hr>
    </div>
    <div class="cont-general">
        <div class="contenerdor-scroll">
            <button aria-label="Anterior" class="btn-scroll btn-left btn-left-series1">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </button>
            <div class="lienzo" id="lienzo-Spopular"></div>
            <button aria-label="Anterior" class="btn-scroll btn-right btn-right-series1">
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
        </div>
        <div role="tablist" class="indicadores-series1"></div>
    </div>

    <!-- Play Now -->
    <div class="row mt-5">
        <h1 class="titleCat">Series de Interes</h1>
        <hr>
    </div>
    <div class="cont-general">
        <div class="contenerdor-scroll">
            <button aria-label="Anterior" class="btn-scroll btn-left btn-left-series2">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </button>
            <div class="lienzo" id="lienzo-SPlayN"></div>
            <button aria-label="Anterior" class="btn-scroll btn-right btn-right-series2">
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
        </div>
        <div role="tablist" class="indicadores-series2"></div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="ModalDetails" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content" id="ventana">
            <div class="modal-header">
                <h5 class="modal-title" id="ModalDetailsLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="background-color: red;"></button>
            </div>
            <div class="modal-body">
                <div class="cont-details">
                    <div class="img-box">
                        <img src="" id="img-details">
                    </div>
                    <div class="details-box">
                        <h1 class="title-movie">
                            <span class="date-movie">sss</span>
                        </h1>
                        <p class="description-movie"></p>
                        <div class="companies">
                            <h3 style="font-family: Cool;">Productores:</h3>
                            <ul class="production">

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>

<?php require_once "footer.php"; ?>
<script src="Js/getinfo.js"></script>
