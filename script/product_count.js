const addToCartButtons = document.querySelectorAll('.button2');
let productCount = document.querySelector('.product-count')
console.log(productCount);

for (let addToCartButton of addToCartButtons) {
    addToCartButton.addEventListener('click', function() {
        let binProductCount = +productCount.innerHTML;
        binProductCount++;
        productCount.innerHTML = binProductCount;
    });
}



