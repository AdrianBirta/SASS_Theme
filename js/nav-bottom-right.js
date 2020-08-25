define(['jquery'], function($) {

    function focusFunction() {
        // Focus = Changes the background color of input to yellow
        document.querySelector(".list-item-text").setAttribute("placeholder", "I WANT ...");
        document.querySelector(".list-item-text").classList.toggle('list-item-text-color');
    }

    function blurFunction() {
        // No focus = Changes the background color of input to red
        document.querySelector(".list-item-text").setAttribute("placeholder", "Search");
        document.querySelector(".list-item-text").classList.toggle('list-item-text-color');
    }

})