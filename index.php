<!DOCTYPE html>
<html lang="en">

<?php
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
    <div class="bg-image">

    </div>

    <div class="container">
        <?php include "modules/header.php"; ?>
        <div class="container-fluid">
            <div class="ribbon">
                <div class="space" style="height: 700px;" id="greetings">
                </div>

                <h1>Десятки интереснейших статей</h1>
                <div class="box">
                    <img src="images/img1.png" alt="" srcset="">
                    <div>
                        <p>
                            На сайте представлено большое количество статей, посвящённых различным моделям военных и гражданских самолётов, вертолётам, технологиям истории и многому другому. Статьи сгруппированы по темам, каждая из которых расказывает посвящена конкретной предметной области или модели техники. Темы же, в свою очередь сгруппированы в крупные разделы, такие как, например, военные самолёты или авиационные технологии.
                        </p>
                        <a href="catalog.php">
                            <div class="button">Каталог</div>
                        </a>
                    </div>
                </div>
                <div class="space" style="height: 700px;"></div>
                <h1>Возможность проверить свои знания</h1>
                <div class="box">
                    <div>
                        <p>
                            Проверьте свои знания в авиации, пройдя парочку увлекательных тестов. На сайте есть большое количество тестов с различными вопросами разного уровня сложности
                        </p>
                        <a href="quiz.php">
                            <div class="button">Пройти тест</div>
                        </a>
                    </div>
                    <img src="images/img2.png" alt="" srcset="">
                </div>
                <div class="space" style="height: 500px;"></div>
                <div class="space" style="height: 500px;"></div>
            </div>
        </div>
        <div id="data" data-path="<?= $_SESSION['path'] ?>"></div>

        <?php include "modules/footer.php"; ?>

    </div>
    <div class='canvas-container'></div>

    <script src='https://unpkg.com/three@0.99.0/build/three.min.js'></script>
    <script src='https://unpkg.com/three@0.99.0/examples/js/loaders/OBJLoader.js'></script>
    <script src='https://unpkg.com/three@0.99.0/examples/js/loaders/MTLLoader.js'></script>
    <script src='https://unpkg.com/three@0.99.0/examples/js/postprocessing/EffectComposer.js'></script>
    <script src='https://unpkg.com/three@0.99.0/examples/js/postprocessing/RenderPass.js'></script>
    <script src='https://unpkg.com/three@0.99.0/examples/js/postprocessing/ShaderPass.js'></script>
    <script src='https://unpkg.com/three@0.99.0/examples/js/postprocessing/GlitchPass.js'></script>
    <script src='https://unpkg.com/three@0.99.0/examples/js/shaders/CopyShader.js'></script>
    <script src='https://unpkg.com/three@0.99.0/examples/js/shaders/SepiaShader.js'></script>
    <script src='https://unpkg.com/three@0.99.0/examples/js/shaders/DigitalGlitch.js'></script>
    <script src='https://unpkg.com/three@0.99.0/examples/js/shaders/LuminosityHighPassShader.js'></script>
    <script src='https://unpkg.com/three@0.99.0/examples/js/shaders/SobelOperatorShader.js'></script>
    <script src='js/shaders/ColorCorrectionShader.js'></script>
    <script src='js/shaders/FilmShader.js'></script>
    <script src='js/shaders/SepiaShader.js'></script>
    <script src='js/shaders/VignetteShader.js'></script>
    <script src='js/shaders/BleachBypassShader.js'></script>
    <script src='https://unpkg.com/three@0.99.0/examples/js/shaders/LuminosityShader.js'></script>
    <script src='https://unpkg.com/three@0.99.0/examples/js/postprocessing/UnrealBloomPass.js'></script>
    <!-- <script src="http://abc.eznettools.net/D300009/X379573/javascript-gallery/velocity.js"></script>
    <script src="http://abc.eznettools.net/monsonproductions/js/stats.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.10.3/plugins/CSSPlugin.min.js"></script> -->
    <script src="js/bg.js"></script>

</body>

</html>