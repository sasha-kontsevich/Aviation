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
    <link rel="stylesheet" href="<?= $_SESSION['path'] ?>css/style.css">
    <title>Статья</title>
</head>


<body>
    <div class="bg-image">

    </div>
    <div class="container">
        <!-- HEADER -->
        <?php include "modules/header.php"; ?>
        <div class="container-fluid">
            <div class="ribbon-wrapper">

                <!-- SIDEBAR -->
                <div class="sidebar-wrapper">
                    <?php include "modules/sidebar.php"; ?>
                    <div class="articles-siedebar" id="alsoTopicWrapper">
                        <div class="header">Также из этой темы</div>
                        <div id="alsoTopic"></div>
                    </div>
                </div>
                <!-- ARTICLE -->
                <div class="article-wrapper">
                    <?php //include "modules/article_header.php"; 
                    ?>
                    <?php include "articles/" . $_SESSION['article'] . ".php"; ?>

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