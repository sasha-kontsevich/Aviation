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
    <link rel="stylesheet" href="css/style.css">
    <title>Мировая авиация</title>
</head>

<body>
    <div class="bg-image">

    </div>

    <div class="container">
        <!-- HEADER -->
        <?php include "modules/header.php"; ?>

        <div class="container-fluid">
            <div class="ribbon-wrapper">
                <!-- SECTIONS -->
                <?php include "modules/sidebar.php"; ?>

                <!-- TOPICS -->
                <div id="topics-block">
                    <div class="header">Темы</div>
                    <div id="topics" class="topics"><?= $_SESSION['section'] ?></div>

                    <!-- ARTICLES -->
                </div>
                <div id="articles-block">
                    <div class="header">Статьи</div>
                    <div id="articles" class="articles"></div>

                </div>
            </div>
        </div>
        <div id="data" data-section="<?= $_SESSION['section'] ?>" data-topic="<?= $_SESSION['topic'] ?>"></div>

        <?php include "modules/footer.php"; ?>

    </div>
    <script src="<?= $_SESSION['path'] ?>js/sidebar.js"></script>

    <script src="<?= $_SESSION['path'] ?>js/catalog.js"></script>

</body>

</html>