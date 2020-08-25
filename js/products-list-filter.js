let mobileFilterList = document.querySelector('.filter-sidebar');
if(mobileFilterList && document.querySelector('.overlay-background')) {
    document.querySelector('.mobile-filter-toggle').addEventListener('click', function () {
        mobileFilterList.style.right = '0';
        document.querySelector('.overlay-background').style.display = 'block';
    });
    document.querySelector('.filter-sidebar-header').addEventListener('click', function () {
        mobileFilterList.style.right = '-9999px';
        document.querySelector('.overlay-background').style.display = 'none';
    });
}

// CHANGE PRODUCT LIST TYPE
let productRows = document.querySelector('.product-rows');
if(productRows) {
    document.querySelector('.svg-grid-small').addEventListener('click', function () {
        document.querySelector('.svg-grid-small').classList.add('active');
        document.querySelector('.svg-grid-large').classList.remove('active');
        document.querySelector('.svg-grid-full').classList.remove('active');

        productRows.classList.remove('row-cols-2');
        productRows.classList.remove('row-cols-1');
        productRows.classList.add('row-cols-4');
    });

    document.querySelector('.svg-grid-large').addEventListener('click', function () {
        document.querySelector('.svg-grid-small').classList.remove('active');
        document.querySelector('.svg-grid-large').classList.add('active');
        document.querySelector('.svg-grid-full').classList.remove('active');

        productRows.classList.remove('row-cols-4');
        productRows.classList.remove('row-cols-1');
        productRows.classList.add('row-cols-2');
    });

    document.querySelector('.svg-grid-full').addEventListener('click', function () {
        document.querySelector('.svg-grid-small').classList.remove('active');
        document.querySelector('.svg-grid-large').classList.remove('active');
        document.querySelector('.svg-grid-full').classList.add('active');

        productRows.classList.remove('row-cols-4');
        productRows.classList.remove('row-cols-2');
        productRows.classList.add('row-cols-1');
    });

    window.addEventListener('resize', function () {
        if(document.documentElement.clientWidth < 992) {
            document.querySelector('.svg-grid-small').classList.remove('active');
            document.querySelector('.svg-grid-large').classList.add('active');

            productRows.classList.remove('row-cols-4');
            productRows.classList.add('row-cols-2');
        }
        if(document.documentElement.clientWidth > 992) {
            document.querySelector('.svg-grid-small').classList.add('active');
            document.querySelector('.svg-grid-large').classList.remove('active');

            productRows.classList.remove('row-cols-2');
            productRows.classList.add('row-cols-4');
        }
    });

    if(document.documentElement.clientWidth < 992) {
        document.querySelector('.svg-grid-small').classList.remove('active');
        document.querySelector('.svg-grid-large').classList.add('active');

        productRows.classList.remove('row-cols-4');
        productRows.classList.add('row-cols-2');
    }
    if(document.documentElement.clientWidth > 992) {
        document.querySelector('.svg-grid-small').classList.add('active');
        document.querySelector('.svg-grid-large').classList.remove('active');

        productRows.classList.remove('row-cols-2');
        productRows.classList.add('row-cols-4');
    }
}

// SHOW ADITIONAL FILTERS
let filterSign = document.querySelector('.middle-show-extra-sign');

if(filterSign) {
    document.querySelector('.middle-show-extra').addEventListener('click', function () {
        let hiddenFilter = document.querySelectorAll('.hidden');
        var style, i;
        for (i = 0; i < hiddenFilter.length; i++) {
            style = getComputedStyle(hiddenFilter[i])
            if(style.display === 'none') {
                hiddenFilter[i].style.display = 'inline-flex';
                filterSign.innerHTML = '-';
            } else {
                hiddenFilter[i].style.display = 'none';
                filterSign.innerHTML = '+';
            }
        }
    });
}

// SHOW MIDDLE FILTERS DROPDOWN
function rotateArrow(element) {
    var middleBox = element.querySelector('.middle-filter-box');
    var arrow = middleBox.querySelector('.middle-filter-arrow');

    toggleElement(arrow, 'active');
}

function openDropdown(element) {
    var middleBoxDropdown = element.querySelector('.middle-filter-dropdown');

    toggleElement(middleBoxDropdown, 'active');
}

let middleFilterSelected = document.querySelectorAll('.middle-filter-content');
if(middleFilterSelected.length > 0) {
    for (var i = 0; i < middleFilterSelected.length; i++) {
        middleFilterSelected[i].addEventListener('click', function () {
            rotateArrow(this);
            openDropdown(this);
        });
    }
}

let sidebarFilterSelected = document.querySelectorAll('.filter-sidebar-content-item');
if(sidebarFilterSelected.length > 0) {
    for (var i = 0; i < sidebarFilterSelected.length; i++) {
        sidebarFilterSelected[i].addEventListener('click', function () {
            rotateArrow(this);
            openDropdown(this);
        });
    }
}

// FILTER DROPDOWN ITEMS
function toggleDropdownItems(element) {
    // TOGGLE TITLE COLOR
    var listTitle = element.querySelector('.filter-title');

    toggleElement(listTitle, 'active');
    // TOGGLE CHECK SIGN
    var checkboxRound = element.querySelector('.checkbox-round');
    var checkSign = checkboxRound.querySelector('.check');

    toggleElement(checkSign, 'active');
}

let middleDropdownList = document.querySelectorAll('.middle-filter-dropdown-list');
if(middleDropdownList.length > 0) {
    for (var i = 0; i < middleDropdownList.length; i++) {
        middleDropdownList[i].addEventListener('click', function () {
            toggleDropdownItems(this);
        });
    }
}

// GENERAL TOGGLE OF ELEMENT
function toggleElement(element, className) {
    if(element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

// GENERAL FILTER WIDTH CHANGE
let filterContent = document.querySelector('.middle-filter');
if(document.querySelector('.list-filters-middle')) {
    window.addEventListener('resize', function () {
        if(document.documentElement.clientWidth > 1280) {
            var filterMiddle = document.querySelector('.list-filters-middle');
            filterMiddle.classList.remove('row-cols-3');
            filterMiddle.classList.add('row-cols-5');
        }
        if(document.documentElement.clientWidth < 1280) {
            var filterMiddle = document.querySelector('.list-filters-middle');
            filterMiddle.classList.remove('row-cols-5');
            filterMiddle.classList.add('row-cols-4');
        }
        if(document.documentElement.clientWidth < 1100) {
            var filterMiddle = document.querySelector('.list-filters-middle');
            filterMiddle.classList.remove('row-cols-4');
            filterMiddle.classList.add('row-cols-3');
        }
    });

    if(document.documentElement.clientWidth > 1280) {
        var filterMiddle = document.querySelector('.list-filters-middle');
        filterMiddle.classList.remove('row-cols-3');
        filterMiddle.classList.add('row-cols-5');
    }

    if(document.documentElement.clientWidth < 1280) {
        var filterMiddle = document.querySelector('.list-filters-middle');
        filterMiddle.classList.remove('row-cols-5');
        filterMiddle.classList.add('row-cols-4');
    }

    if(document.documentElement.clientWidth < 1100) {
        var filterMiddle = document.querySelector('.list-filters-middle');
        filterMiddle.classList.remove('row-cols-4');
        filterMiddle.classList.add('row-cols-3');
    }
}
