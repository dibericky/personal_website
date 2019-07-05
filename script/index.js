$(document).ready(function () {
    let animated = false;
    $(window).scroll(function () {
        if (($("#cta_container").position().top - $(window).scrollTop()) <= $(window).height() / 2) {
            if (!animated) {
                animated = true;
                $("#second .animated").addClass("fadeInUp");
            }
        }
    });
});
