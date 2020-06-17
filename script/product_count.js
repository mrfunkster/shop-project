const addToCartButtons = document.querySelectorAll('.button2');
let productCount = document.querySelector('.product-count');
let popupWindow = document.querySelector('.popup-window');
let popupCloseButton = document.querySelector('.popup-button');
let popupProductCount = document.querySelector('.popup-message p')
console.log(popupProductCount);

for (let addToCartButton of addToCartButtons) {
    addToCartButton.addEventListener('click', function() {
        let productTittle = addToCartButton.parentElement.parentElement.querySelector('.product-title p').innerHTML;
        console.log(productTittle)
        let binProductCount = +productCount.innerHTML;
        binProductCount++;
        productCount.innerHTML = binProductCount;
        popupWindow.classList.add('popup-window-active');
        let word;
        if(binProductCount === 1) {
            word = "товар";
        } else if(binProductCount <= 4) {
            word = "товари"
        } else if(binProductCount >= 5) {
            word = "товарів"
        }
        popupProductCount.innerHTML = `Товар "${productTittle}" успішно додано в корзину. Всього в корзині ${binProductCount} ${word}.`;
        popupCloseButton.addEventListener('click', function() {
            popupWindow.classList.remove('popup-window-active');
        });
    });
}