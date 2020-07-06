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
let binResultPrice     = document.querySelector('.bin-anotation p span');
let favorites          = document.querySelectorAll('.product-logo__favorite');
let scrollPos          = 0;
let resultPrice        = 0;


for (let addToCartButton of addToCartButtons) {
    cleanRecycleBtn.addEventListener('click', function() {
        cleanRecycleBtn.classList.add('white-hover')
        cleanBinMessage.classList.add('visible');
        binAnotation.classList.add('visible');
        binIcon.classList.add('border');
        cleanPopupAgree.addEventListener('click', function() {
            let binProductCount = 0;
            resultPrice         = 0;
            productCount.innerHTML = binProductCount;
            cleanRecycleBtn.style.display = 'none';
            productCountBin.innerHTML = `У Вашій корзині відсутні товари<span></span>.`;
            cleanBinMessage.classList.remove('visible');
            let timer = setTimeout(function() {
                binAnotation.classList.remove('visible');
                cleanRecycleBtn.classList.remove('white-hover');
                binIcon.classList.remove('border');
            }, 2000);
        });
        cleanPopupCancel.addEventListener('click', function() {
            cleanBinMessage.classList.remove('visible');
            let timer = setTimeout(function() {
                binAnotation.classList.remove('visible');
                cleanRecycleBtn.classList.remove('white-hover');
                binIcon.classList.remove('border');
            }, 2000);
        });
    });
    addToCartButton.addEventListener('click', function() {
        let productTittle        = addToCartButton.parentElement.parentElement.querySelector('.product-title p').innerHTML;
        let productPriceValue    = addToCartButton.parentElement.parentElement.querySelector('.product-price p').innerHTML.substr(1).replace("</>", "").replace("<span>", ".");
        binResultPrice.innerHTML = productPriceValue;
        let binProductCount      = +productCount.innerHTML;
        binProductCount++;
        resultPrice              += parseFloat(binResultPrice.innerHTML);
        console.log(resultPrice);
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
        productCountBin.innerHTML = `Зараз у Вашій корзині ${binProductCount} ${word} на суму <span>${resultPrice.toFixed(2)}$</span>`;
        popupWindow.classList.add('visible');
        popupProductCount.innerHTML = `Товар "${productTittle}" успішно додано в корзину. Всього в корзині ${binProductCount} ${word} на суму ${resultPrice.toFixed(2)}$`;
        popupCloseButton.addEventListener('click', function() {
            closeModal();
        });
    });
};
function closeModal() {
    popupWindow.classList.remove('visible');
}
for (let favorite of favorites) {
    favorite.addEventListener('click', function() {
        if(this.classList.contains('favorite-pressed') === true) {
            this.classList.remove('favorite-pressed');
        } else {
            this.classList.add('favorite-pressed');
        }
    })
}

window.addEventListener('scroll', function() {
    scrollPos = window.scrollY;
    if (scrollPos > 400) {
        headerBar.style.backgroundColor = 'rgba(255, 255, 255, .98)';
        binIcon.classList.add('border');
    } else if (scrollPos <= 400) {
        headerBar.style.backgroundColor = 'rgba(255, 255, 255, .75)';
        binIcon.classList.remove('border');
    }    
});

popupWindow.addEventListener('click', function(e) {
    if(e.target === popupWindow) {
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