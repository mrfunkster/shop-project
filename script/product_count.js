const addToCartButtons = document.querySelectorAll('.button2');
let productCount       = document.querySelector('.product-count');
let popupWindow        = document.querySelector('.popup-window');
let popupCloseButton   = document.querySelector('.popup-button');
let popupProductCount  = document.querySelector('.popup-message p');
let productCountBin    = document.querySelector('.bin-anotation p');
let binAnotation       = document.querySelector('.bin-anotation');
let headerBar          = document.querySelector('.header');
let binIcon            = document.querySelector('.bin');
let cleanRecycleBtn    = document.querySelector('.bin-anotation .popup-button');
let cleanPopupAgree    = document.getElementById('bin-clear-agree');
let cleanPopupCancel   = document.getElementById('bin-clear-cancel');
let cleanBinMessage    = document.getElementById('bin-message');
let scrollPos          = 0;


for (let addToCartButton of addToCartButtons) {
    cleanRecycleBtn.addEventListener('click', function() {
        cleanRecycleBtn.classList.add('white-hover')
        cleanBinMessage.classList.add('visible');
        binAnotation.classList.add('visible');
        cleanPopupAgree.addEventListener('click', function() {
            let binProductCount = 0;
            productCount.innerHTML = binProductCount;
            cleanRecycleBtn.style.display = 'none';
            productCountBin.innerHTML = `У Вашій корзині ще відсутні товари.`;
            cleanBinMessage.classList.remove('visible');
            let timer = setTimeout(function() {
                binAnotation.classList.remove('visible');
                cleanRecycleBtn.classList.remove('white-hover');
            }, 2000);
        });
        cleanPopupCancel.addEventListener('click', function() {
            cleanBinMessage.classList.remove('visible');
            let timer = setTimeout(function() {
                binAnotation.classList.remove('visible');
                cleanRecycleBtn.classList.remove('white-hover');
            }, 2000);
        });
    });
    addToCartButton.addEventListener('click', function() {
        let productTittle = addToCartButton.parentElement.parentElement.querySelector('.product-title p').innerHTML;
        let binProductCount = +productCount.innerHTML;
        binProductCount++;
        cleanRecycleBtn.style.display = 'block';
        let word;
        if(binProductCount === 1) {
            word = "товар";
        } else if(binProductCount <= 4) {
            word = "товари"
        } else if(binProductCount >= 5) {
            word = "товарів"
        }
        cleanRecycleBtn.addEventListener('click', function() {
            binProductCount = 0;
        })
        productCount.innerHTML = binProductCount;
        productCountBin.innerHTML = `Зараз у Вашій корзині ${binProductCount} ${word}.`;
        popupWindow.classList.add('visible');
        popupProductCount.innerHTML = `Товар "${productTittle}" успішно додано в корзину. Всього в корзині ${binProductCount} ${word}.`;
        popupCloseButton.addEventListener('click', function() {
            popupWindow.classList.remove('visible');
        });
    });
};


window.addEventListener('scroll', function() {
    scrollPos = window.scrollY;
    if (scrollPos > 400) {
        headerBar.style.backgroundColor = 'rgba(255, 255, 255, .98)';
        binIcon.style.borderColor = '#2c71b8';
    } else if (scrollPos <= 400) {
        headerBar.style.backgroundColor = 'rgba(255, 255, 255, .75)';
        binIcon.style.borderColor = 'white';
    }    
});