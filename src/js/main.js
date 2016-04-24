$(function() {

    var $window = $(window);

    // Page Navigation logic
    var makeNavItemActive = function() {
        $('html, body').animate({
            scrollTop: $(navLink).offset().top
        }, 500);
    };

    var collapseNavbar = function() {
        $(".navbar-collapse.in").collapse('hide');
    };

    // Updating which nav bar item is active
    $(".nav a").on("click", function() {
        $('html, body').animate({
            scrollTop: $('.' + $(this).attr('id')).offset().top
        }, 500);
        collapseNavbar();
    });

    // Collapse navbar on touch/click
    $(document).on("click touchend", function() {
        collapseNavbar();
    });

    // Update progress bars on scrolling into view
    var isScrolledIntoView = function(elem) {
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = elem.offset().top;
        var elemBottom = elemTop + elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    };

    // animate programming skills levels
    var skills = [$("#javaSkill"), $("#cppSkill"), $("#mlSkill"), $("#jsSkill"), $("#htmlSkill"), $("#cssSkill")];
    var skillVal = [90, 70, 100, 90, 80, 60];
    var animateSkills = function() {
        skills.forEach(function(elem, index) {
            // animate programming skill
            var val = (isScrolledIntoView(elem)) ? skillVal[index] : 0;
            elem.css('width', val + '%').attr('aria-valuenow', val);
        });
    };
    $(document).scroll(animateSkills);
    animateSkills();

    console.log("JS Ready");
});
