let productsCountEl = document.getElementById('products-count');
let addToCartButtons = document.querySelectorAll('.button2')

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function() {
        let prevProcuctsCount = +productsCountEl.textContent;
        productsCountEl.textContent = prevProcuctsCount + 1; 
    })
}

// Change like state

let likeBtns = document.querySelectorAll('.product-logo__favorite');

for (let likeBtn of likeBtns) {
    likeBtn.addEventListener('click', function() {
        this.classList.toggle('liked');
    })
}


// Slider
$(document).ready(function() {
    $(".slider-block").slick({
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        waitForAnimate: false
    });
});


