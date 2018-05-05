// slider

$('.my-slider').unslider({
    arrows: false,
    autoplay: true,
    infinite: true,
    delay: 5000
});


// responsive nav

document.querySelector('.hamburger').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.main-nav ul').classList.toggle('open');
});

const navLinks = document.querySelectorAll('.main-nav ul li a');

Array.from(navLinks).forEach(function (link) {
    link.addEventListener('click', function () {
        document.querySelector('.main-nav ul').classList.toggle('open');
    });
});


// smooth scroll

function myScroll(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 1000);
    location.hash = href;
};

$('a[href*="#"]').click(myScroll);
