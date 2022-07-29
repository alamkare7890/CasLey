var btn = document.getElementById('toggleBtn');

toggleBtn.onclick = function () {

    toggleBtn.classList.toggle('active');
},
$(document).ready(function () {
    $(".slide-about").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                
                
                }
            
            }      
        ],
        
        
        
    })

    $(".slide-photo").slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
    })

})
$('#navBtn').click(function () {

    $('#navOpen').toggleClass('nav-down');

})