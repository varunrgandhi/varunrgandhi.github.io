$(function() {
//     $('.navbar-nav a').click(function() {
//         console.log('Scroll', this)
//         $('html, body').animate({
//             scrollTop: $($(this).attr('href')).offset().top
//         }, 500);
//         return false;
//     });
    // Updating which nav bar item is active
    $(".nav a").on("click", function() {
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

    console.log("JS Ready");
})
