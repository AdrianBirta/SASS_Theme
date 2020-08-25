define(['jquery'], function($) {
    let counters = document.querySelectorAll(".cart-counter");
    let cartItems = document.querySelectorAll(".cart-counter-items > .cart-item");

    // Check if exist cart items
    if(counters.length > 0 && cartItems.length > 0) {
        for (let key of Object.keys(counters)) {
            if (cartItems.length == 0 ) {
                counters[key].style.display = "none";
            } else {
                counters[key].style.display = "flex";
            }

            // Check the items number
            if (cartItems.length <= 9 ) {
                counters[key].textContent = '0' + cartItems.length;
            } else if( cartItems.length > 9) {
                counters[key].textContent = cartItems.length;
            }
        }
    }
})