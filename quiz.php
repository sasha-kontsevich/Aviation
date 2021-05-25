<!DOCTYPE html>
<html lang="en">


<head>
    <link rel="icon" href="favicon.ico" type="image/x-icon">

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Викторины</title>
</head>

<body>
    <div class="bg-image">

    </div>

    <div class="container">

        <?php include "modules/header.php"; ?>
        <div class="container-fluid">
            <div class="ribbon-wrapper">
                <div class="quiz-ribbon">
                    <div class="content">
                        <div class="quiz-image"></div>

                        <h1>Тест: как хорошо вы разбираетесь в авиации?</h1>
                        <div class="button-wrapper" id="quizButton">
                            <div class="button" onclick="loadQuiz()">Начать тест</div>
                        </div>

                        <div id="quiz">
                        </div>

                        <div id="quizResult">
                            <div class="gradient">
                                <div id="quizResultMessage">
                                </div>
                                <div id="congrats">
                                </div>
                                <div class="button-wrapper">
                                    <div class="button" onclick="loadQuiz()">Пройти тест заново</div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        <div id="data" data-section="<?= $_SESSION['section'] ?>" data-topic="<?= $_SESSION['topic'] ?>"></div>

        <?php include "modules/footer.php"; ?>

        <script src="js/questions.js"></script>
        <script src="js/quiz.js"></script>
</body>

</html>