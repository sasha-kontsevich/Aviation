<script src="js/articles.js"></script>
<header class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-md-2 col-sm-12 logo">
                <a href="index.php">
                    <img src="images/logo1.svg" alt="Мировая авиация" srcset="">

                </a>
            </div>
            <div class="col-md-1  col-sm-12"></div>
            <div class="col-md-3 col-sm-12 search-wrapper">
                <form action="">
                    <input type="search" id="search" placeholder="Поиск...">
                    <i class="fa fa-search"></i>
                </form>
                <div id="search-results" class="hidden"></div>

            </div>
            <div class="col-md-1 col-sm-12"></div>
            <div class="col-md-5 col-sm-12">
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
</header>
<div class="header-margin"></div>

<script src="js/randomArticle.js"></script>