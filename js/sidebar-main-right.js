define(['jquery'], function($) {

    // SELECT SIDEBAR-MAIN-RIGHT TRIGGER ELEMENTS
    
    let backShadow = document.createElement('div');
    let menuSidebar = document.querySelector('.menu-sidebar');
    menuSidebar.parentNode.insertBefore(backShadow, menuSidebar.nextSibling);
    backShadow.classList.add('shadow');

    // FOR ACCOUNT
    let accountIcon = document.querySelector('.nav-container-icons > .fa-user-alt');
    let accountSidebar = document.querySelector('.account-sidebar');
    let accountSidebarHeader = document.querySelector('.account-sidebar-top');

    // FOR CART
    let cartIcon = document.querySelector('.nav-container-icons > .fa-shopping-bag');
    let cartSidebar = document.querySelector('.cart-sidebar');
    let cartSidebarHeader = document.querySelector('.cart-sidebar-top');

    // REFACTORIZATION
    let sidebars = ['account','cart'];
    let buttons = ['Icon','SidebarHeader'];
    let sidebar = 'Sidebar';

    // SHADOW USED FROM SIDEBAR-MAIN-MANU

    // ADD SIDEBAR-MAIN-RIGHT TRIGGER EVENTS
    sidebars.forEach(listItems => {
        buttons.forEach(button => {
            eval(listItems+button).addEventListener('click', () => {
                backShadow.classList.toggle('shadow-in');
                eval(listItems+sidebar).classList.toggle('sidebar-toggle-right');
            })
        })
    })
})