define(['jquery'], function($) {
    let cookiesPopup = document.querySelector('.cookies-popup');

    function removeCookiesPopup() {
        cookiesPopup.remove();
    }
    if(cookiesPopup) {
        cookiesPopup.addEventListener('click',() => {
            removeCookiesPopup();
        });

        setTimeout(() => {
            removeCookiesPopup();
        }, 20000);
    }
})