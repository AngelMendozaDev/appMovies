<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MovieApp</title>
    <link rel="icon" href="Icons/cinema.png">
    <link rel="stylesheet" href="Libs/Bootstrapp5/css/bootstrap.min.css">
    <link rel="stylesheet" href="Libs/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="Libs/GliderJs/glider.min.css">
    <link rel="stylesheet" href="Styles/stylesBanner.css">
</head>

<body>
    <!-- Navegador -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.php">
                <img src="Icons/cinema.png" width="70px" height="70px" alt="AppMovie">
                <span id="NameTitle">MovieApp</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" id="P" aria-current="page" href="catalogo.php?type=P">
                            <i class="fa fa-film" aria-hidden="true"></i> Peliculas
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="Tv" href="catalogo.php?type=TV">
                            <i class="fa fa-tv" aria-hidden="true"></i> TV Series
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="C" href="catalogo.php?type=M">
                            <i class="fa fa-book" aria-hidden="true"></i> Catalogo
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>