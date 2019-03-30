$("#arrow").click(function() {
    $("html, body").animate({
        scrollTop: $("#skills").offset().top
    }, 800);
});