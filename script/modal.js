// Modal
let moreDetailsBtns = document.querySelectorAll('.button1');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.btn-close');

moreDetailsBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        openModal()
    })
})

function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide')
}

function toCloseModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
}

closeBtn.addEventListener('click', toCloseModal);

modal.addEventListener('click', function(e) {
    console.log(e.target)
    if (e.target === modal) {
        toCloseModal();
    }
})