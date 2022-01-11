<?php
require_once "header.php";
$type = $_GET['type'];
?>
<link rel="stylesheet" href="Styles/detalles.css">
<link rel="stylesheet" href="Styles/catalogo.css">

<!-- Banner -->
<div class="banner">
    <div class="content">
        <h1>Realizo: Mendoza Garcia Luis Angel</h1>
        <h3>¿Que veremos hoy ?</h3>
        <div class="form-serch">
            <input type="text" id="tipo" value="<?php echo $type ?>" hidden>
            <input type="text" class="form-control" name="data" id="serch-in" placeholder="titulo o productor..." value="<?php echo $_POST['data']; ?>">
            <button class="btn btn-primary" id="Lupa">
                <i class="fa fa-search" aria-hidden="true"></i>
            </button>
        </div>
    </div>
</div>


<div class="container my-cont mt-2 mb-4">
    <div class="row lienzo-items" id="catalogo">

    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="ModalDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
<script src="Js/buscador.js"></script>
<script>
    MultiSerch("<?php echo $_POST['data']; ?>");
    switch ($('#tipo').val()) {
        case "M":
            $('#C').addClass('active');
            break;
        case "P":
            $('#P').addClass('active');
            break;
        case "TV":
            $('#Tv').addClass('active');
            break;
    }
</script>