let quiz = document.getElementById('quiz');
$('#quizResult').hide();
$('#quiz').hide();
$('#headerQuiz').addClass('selected');
let count = 1;
let totalQuestions = Questions.length;
let currentQuestions = [];
let answered = [];

var timeOut;

function goUp() {
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -200);
        timeOut = setTimeout('goUp()', 20);
    } else clearTimeout(timeOut);
}

function loadQuiz() {
    $('#quizResult').hide();
    goUp();
    currentQuestions = [];
    answered = [];
    for (let i = 0; i < count; i++) {
        answered[i] = 0;
    }
    while (currentQuestions.length < count) {
        var n = Math.floor(Math.random() * totalQuestions);
        if (currentQuestions.indexOf(n) < 0) {
            currentQuestions.push(n);
        }
    }


    str = '';

    for (let i = 0; i < currentQuestions.length; i++) {
        const n = currentQuestions[i];
        str += `
    <div class="question" id="q` + i + `">
        <h3>Вопрос ` + (i + 1) + `/` + count + `</h3>
        <div class="image"><img src="images/t` + n + `.jpg" ></div>
        <h2>` + Questions[n].title + `</h2>
        <div class="options"> `;
        for (let j = 0; j < Questions[n].options.length; j++) {
            const element = Questions[n].options[j];
            str += `
        <div class="option" id="q` + i + `o` + j + `" onclick="check(this, ` + i + `, ` + n + `,` + j + `)"> ` + element + `</div>`;
        }
        str += `</div></div>`;
    }

    quiz.innerHTML = str;
    $('#quizButton').slideUp();
    $('#quiz').slideDown();

}

function check(e, i, n, j) {
    if (answered[i] == 0) {
        if (j == Questions[n].answer) {
            $('#q' + i + 'o' + j).addClass('right');
            answered[i] = 1;
        } else {
            $('#q' + i + 'o' + j).addClass('wrong');
            answered[i] = -1;
        }
    }
    if (answered.indexOf(0) < 0) {
        var result = 0;
        for (let i = 0; i < answered.length; i++) {
            if (answered[i] == 1) result++;
        }
        var message = '';
        if (result / count <= 0.2) {
            message = 'Ну, хуже уже некуда';
        } else if (result / count <= 0.4) {
            message = 'Слабовато';
        } else if (result / count <= 0.6) {
            message = 'Неплохо';
        } else if (result / count <= 0.8) {
            message = 'Хорошо';
        } else {
            message = 'Потрясающе';
        }
        document.getElementById('quizResultMessage').innerHTML = "Ваш результат: " + result + "/" + count + "!";
        document.getElementById('congrats').innerHTML = message;
        $('#quizResult').slideDown();
    }
}