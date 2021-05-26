<!DOCTYPE html>
<html lang="en">

<?php
$_SESSION['section'] = $_GET['section'];
$_SESSION['topic'] = $_GET['topic'];
?>

<head>
    <link rel="icon" href="favicon.ico" type="image/x-icon">

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Мировая авиация</title>
</head>

<body>
    <?php include "modules/header.php"; ?>


    <div class="container h100vh">


        <div class="row">
            <!-- SECTIONS -->
            <div class="col-md-3">
                <?php include "modules/sidebar.php"; ?>

            </div>

            <!-- TOPICS -->
            <div id="topics-block" class="col-md-4">
                <div class="header" id="topicsHeader" onclick="topicsTab()">Темы</div>
                <div id="topics" class="topics"></div>

                <!-- ARTICLES -->
            </div>
            <div id="articles-block" class="col-md-5">
                <div class="header" id="articlesHeader" onclick="articlesTab()">Статьи</div>
                <div id="articles" class="articles"></div>

            </div>
        </div>
        <div id="data" data-section="<?= $_SESSION['section'] ?>" data-topic="<?= $_SESSION['topic'] ?>"></div>


    </div>
    <?php include "modules/footer.php"; ?>

    <script src="<?= $_SESSION['path'] ?>js/sidebar.js"></script>
    <script src="<?= $_SESSION['path'] ?>js/catalog.js"></script>

</body>

</html>