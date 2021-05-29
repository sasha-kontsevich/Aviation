<!DOCTYPE html>
<html lang="en">

<?php
$_SESSION['article'] = $_GET['article'];
?>

<head>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="<?= $_SESSION['path'] ?>css/style.css">
    <title>Статья</title>
</head>


<body>
    <?php include "modules/header.php"; ?>

    <div class="container h100vh">
        <!-- HEADER -->
        <div class="row">

            <!-- SIDEBAR -->
            <div class="sidebar-wrapper col-md-4 col-sm-1">
                <?php include "modules/sidebar.php"; ?>
                <div class="articles-siedebar" id="alsoTopicWrapper">
                    <div class="header">Также из этой темы</div>
                    <div id="alsoTopic"></div>
                </div>
            </div>
            <!-- ARTICLE -->
            <div class="article-wrapper  col-md-7 col-sm-11">
                <?php //include "modules/article_header.php"; 
                ?>
                <?php include "articles/" . $_SESSION['article'] . ".php"; ?>
                <div id="articleControls"></div>
            </div>
        </div>

    </div>
    <div id="data" data-article="<?= $_SESSION['article'] ?>"></div>
    <?php include "modules/footer.php"; ?>

    </div>
    <script src="<?= $_SESSION['path'] ?>js/sidebar.js"></script>

    <script src="<?= $_SESSION['path'] ?>js/article.js"></script>

</body>

</html>