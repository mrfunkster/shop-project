let productsCountEl = document.getElementById('products-count');
let addToCartButtons = document.querySelectorAll('.button2');

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function() {
        let prevProcuctsCount = +productsCountEl.textContent;
        productsCountEl.textContent = prevProcuctsCount + 1; 
    })
}