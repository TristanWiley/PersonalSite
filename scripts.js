$(".arrows").click(function() {
    var section = $(this).closest('section');

    section.animate({
        scrollTop: section.scrollTop() + section.offset().top
    }, 700);
});