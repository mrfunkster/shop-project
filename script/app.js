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

// Modal

let moreDetailsBtns = document.querySelectorAll('.button1');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.btn-close');

moreDetailsBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        modal.classList.add('show');
        modal.classList.remove('hide')
    })
})

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
}

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', function(e) {
    if(e.target === modal) {
        closeModal()
    }
})

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


