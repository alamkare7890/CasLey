var btn = document.getElementById('toggleBtn');

toggleBtn.onclick = function () {

    toggleBtn.classList.toggle('active');
},
$(document).ready(function () {
    $(".slide-about").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
    })

    $(".slide-photo").slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
    })

})