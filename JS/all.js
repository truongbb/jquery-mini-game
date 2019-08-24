$(document).ready(function () {

    "use strict";

    // <editor-fold desc="initialization">
    (function init() {
        // <editor-fold desc="get current score from url">
        let param = window.location.search;
        if (param) {
            let score = param.split('=')[1];
            $('.current-score').text(score);
        }
        // </editor-fold>

        // <editor-fold desc="hide some regions">
        $('.wrong-answer, .btn-lose, .true-answer, .true-buttons').css('display', 'none');
        $('.next-quiz').css('visibility', 'visible');
        // </editor-fold>
    })();
    // </editor-fold>

    // <editor-fold desc="right answer">
    $('.true').click(function () {
        let currentQuiz = $('.quiz-no-span').text();

        if (parseInt(currentQuiz) === 42) {
            window.location.replace('win.html');
            return true;
        }

        if (parseInt(currentQuiz) % 5 == 0) {
            $('#level')[0].play();
        } else {
            $('#ding')[0].play();
        }

        $('.answer-region, .animal-img').css('display', 'none');
        $('.next-quiz').css('visibility', 'hidden');
        $('.true-buttons').css('display', 'block');
        $('.true-answer').slideDown(1000);

        let backgroundColor = $('.true').css('backgroundColor');
        $('.btn-hidden-answer').css('background-color', backgroundColor);

        let trueAnswer = $('.true').text();
        $('.hidden-answer').text(trueAnswer);

        let currentPoint = $('.current-score').text();
        currentPoint = parseInt(currentPoint);
        currentPoint += 100;
        $('.current-score').text(currentPoint);
    });
    // </editor-fold>

    // <editor-fold desc="wrong answer">
    $('.false').click(function () {
        $('#wrong')[0].play();

        $('.answer-region, .animal-img').css('display', 'none');
        $('.next-quiz').css('visibility', 'hidden');
        $('.wrong-answer').slideDown(1000);
        $('.btn-lose').css('display', 'flex');

        let currentPoint = $('.current-score').text();
        let currentPointTemp = currentPoint;
        currentPoint = parseInt(currentPoint);
        currentPoint -= 100;
        $('.current-score').text(currentPoint < 0 ? 0 : currentPoint);
        $('.current-score-lose').text(currentPointTemp);
    });
    // </editor-fold>

    // <editor-fold desc="next quiz">
    $('.next-button').click(function () {
        redirect(0);
    });
    // </editor-fold>

    // <editor-fold desc="replay">
    $('.btn-lose').click(function () {
        $('.wrong-answer, .btn-lose, .true-answer, .true-buttons').css('display', 'none');
        $('.answer-region, .animal-img').css('display', 'block');
        $('.next-quiz').css('visibility', 'visible');
    });

    // <editor-fold desc="ignore quiz">
    $('.next-quiz-img').click(function () {
        let currentPoint = $('.current-score').text();
        if (currentPoint < 200) {
            alert('Your score must be greater than 200 to ignore this quiz!');
            return;
        }
        redirect(200);
    });
    // </editor-fold>

    // <editor-fold desc="go to home">
    $('.home-link').click(function () {
        window.location.replace('index.html');
    });
    // </editor-fold>

    function redirect(subScore) {
        let currentPoint = $('.current-score').text();
        currentPoint = parseInt(currentPoint);
        currentPoint -= subScore;
        let currentQuiz = $('.quiz-no-span').text();
        currentQuiz = parseInt(currentQuiz);
        currentQuiz++;
        window.location.replace(currentQuiz + '.html?currentPoint=' + currentPoint);
    }

});