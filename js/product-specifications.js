// BEGIN PRODUCT SPECIFICATION SIZES TOGGLE ACTIVE TO OUTLINE BORDER AND INNER TEXT
let productSizes      = document.getElementById('product-sizes');
let productSizesClass = document.getElementsByClassName('product-details-specifications-size');
if(productSizes && productSizesClass.length > 0) {
    productSizes.addEventListener('click', function (event) {
        if(event.target.tagName == 'LABEL') {
            for (var i = 0; i < productSizesClass.length; i++) {
                productSizesClass.item(i).classList.remove('active');
            }
            event.target.parentElement.classList.add('active')
        }
    });
}
// END PRODUCT SPECIFICATION CHANGE

// BEGIN PRODUCT SPECIFICATION SIZES TOGGLE BY COUNTRY
function addCountry(country) {
    if(country == 'fr') {
        document.querySelector('.country-sizes-eu').classList.add('inactive');
        document.querySelector('.country-sizes-fr').classList.add('active');
    } else {
        document.querySelector('.country-sizes-eu').classList.remove('inactive');
        document.querySelector('.country-sizes-fr').classList.remove('active');
    }
}

function removeCountry(country) {
    if(country == 'fr') {
        document.querySelector('.country-sizes-fr').classList.add('inactive');
        document.querySelector('.country-sizes-eu').classList.add('active');
    } else {
        document.querySelector('.country-sizes-fr').classList.remove('inactive');
        document.querySelector('.country-sizes-eu').classList.remove('active');
    }
}
if(document.querySelector('.country-sizes-fr') && document.querySelector('.country-sizes-eu')) {
    document.querySelector('.country-sizes-fr').addEventListener('click',  function (event) {
        removeCountry('fr');
        addCountry('eu');
    });

    document.querySelector('.country-sizes-eu').addEventListener('click',  function (event) {
        removeCountry('eu');
        addCountry('fr');
    });
}
// END TOGGLE BY COUNTRY

// BEGIN AVAILABLE SIZES OVERLAY BOX
if(document.querySelector('.size-availability-form-open') && document.querySelector('.overlay-background') && document.querySelector('.btn-category')) {
    document.querySelector('.size-availability-form-open').addEventListener('click', function () {
        document.querySelector('.overlay-background').classList.add('active');
        document.querySelector('.size-availability-overlay').classList.add('active');
    });

    document.querySelector('.overlay-background').addEventListener('click', function () {
        document.querySelector('.overlay-background').classList.remove('active');
        document.querySelector('.size-availability-overlay').classList.remove('active');
    });

    document.querySelector('.btn-category').addEventListener('click', function () {
        document.querySelector('.overlay-background').classList.remove('active');
        document.querySelector('.size-availability-overlay').classList.remove('active');
    });
}
// END OVERLAY
