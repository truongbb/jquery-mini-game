$(document).ready(function () {
    "use strict";

    (function init() {
        setInterval(function () {
            $('#music')[0].play();
        }, 45000);
    })();

    $('.developing').click(function () {
        alert('This feature is being developed, play "Aninal on land" instead!"');
    });
});