<script src="js/articles.js"></script>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
<header class="container-fluid">
    <div class="container">
        <div class="navbar navbar-expand-md">
            <div class="logo">
                <a href="index.php">
                    <img src="images/logo1.svg" alt="Мировая авиация" srcset="">

                </a>

            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="row collapse navbar-collapse" id="navbarSupportedContent">
                <div class="col-md-1 col-sm-12 logo">

                </div>
                <div class="col-md-1  col-sm-12 "></div>
                <div class="col-md-3 col-sm-12 search-wrapper">
                    <form action="">
                        <input type="search" id="search" placeholder="Поиск...">
                    </form>
                    <div id="search-results" class="hidden"></div>

                </div>
                <div class="col-md-1 col-sm-12"></div>
                <div class="col-md-6 col-sm-12">
                    <nav class="row">
                        <a href="catalog.php" class="col-md-2">
                            <div id="headerCatalog">Каталог</div>
                        </a>
                        <a href="#" onclick="randomArticle()" class="col-md-7">
                            <div>Случайная статья</div>
                        </a>
                        <a href="quiz.php" class="col-md-3">
                            <div id="headerQuiz">Викторины</div>
                        </a>
                    </nav>
                </div>
            </div>

        </div>
    </div>
</header>
<div class="header-margin"></div>

<script src="js/randomArticle.js"></script>