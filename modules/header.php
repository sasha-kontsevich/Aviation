<script src="js/articles.js"></script>
<header>
    <div class="header-content">
        <div class="logo">
            <a href="index.php">
                <img src="images/logo1.svg" alt="Мировая авиация" srcset="">

            </a>
        </div>

        <div class="row">
        <form action="">
                <input type="search" id="search" placeholder="Поиск...">
                <i class="fa fa-search"></i>
            </form>

            <nav>
                <a href="catalog.php">
                    <div id="headerCatalog">Каталог</div>
                </a>
                <a href="#" onclick="randomArticle()">
                    <div>Случайная статья</div>
                </a>
                <a href="quiz.php">
                    <div id="headerQuiz">Викторины</div>
                </a>
            </nav>
            <div id="search-results" class="hidden"></div>
        </div>
    </div>
</header>
<div class="header-margin"></div>

<script src="js/randomArticle.js"></script>