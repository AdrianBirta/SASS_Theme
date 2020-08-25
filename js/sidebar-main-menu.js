define(['jquery'], function($) {

    // SELECT SIDEBAR-MAIN-MENU TRIGGER ELEMENTS
    let hamburger = document.querySelector('.header-hamburger');
    let menuSidebar = document.querySelector('.menu-sidebar');
    let menuSidebarClose = document.querySelector('.menu-sidebar-close');

    // CREATE SIDEBAR-MAIN-MENU SHADOW BACKGROUND ELEMENT
    if(hamburger && menuSidebar && menuSidebarClose) {
        let shadow = document.createElement('div');
        menuSidebar.parentNode.insertBefore(shadow, menuSidebar.nextSibling);
        shadow.classList.add('shadow');

    // ADD SIDEBAR-MAIN-MENU TRIGGER EVENTS
        hamburger.addEventListener('click', () => {
            menuSidebar.style.transform = "translate3d(0,0,0)";
            menuSidebarClose.style.padding = "1.98rem";
            shadow.classList.toggle('shadow-in');
        });

        menuSidebarClose.addEventListener('click', () => {
            menuSidebar.style.transform = "translate3d(-100%,0,0)";
            menuSidebarClose.style.padding = "1.98rem 0rem";
            shadow.classList.toggle('shadow-in');
        });
    }

    //  SIDEBAR-MAIN-MENU FUNCTIONALITY START
    const SidebarPrimary = Array.from(document.querySelectorAll('.menu-sidebar-primary>li'))
    const SidebarSubmenu = Array.from(document.querySelectorAll('.menu-sidebar-submenu'));
    const categories = ['women','men','kids','brands','about us'];

    function getListItem(v1,v2,attribute,by) {
        return "listItems.children[" + v1 + "].children[" + v2 + "]." + attribute + " == " + by + ""
    }

    if (SidebarPrimary.length > 0 && SidebarSubmenu.length > 0) {
        categories.forEach(category => {
            SidebarSubmenu.forEach(sidebarSubmenuLayer => {
                const ulSubmenuLayer = Array.from(sidebarSubmenuLayer.children);
                SidebarPrimary.forEach(listItems => {
                    try {
                        if (eval(getListItem(0,0,'textContent','category'))) {
                            listItems.addEventListener('click', () => {
                                SidebarPrimary.forEach(listItems => {
                                    listItems.classList.toggle('swipe-sidebar-items')
                                })
                                ulSubmenuLayer.forEach(listItems => {
                                    try {
                                        if ( eval(getListItem(0,1,'textContent','category')) ) {
                                            ulSubmenuLayer.forEach(listItems => {
                                                listItems.classList.toggle('swipe-sidebar-items');
                                            })
                                        }
                                    } catch(err) {
                                        return;
                                    }
                                })
                            });
                        }
                    } catch(err) {
                        return;
                    }
                })
                ulSubmenuLayer.forEach(listItems => {
                    try {
                        if (eval(getListItem(0,1,'textContent','category'))) {
                            listItems.addEventListener('click', () => {
                                SidebarPrimary.forEach(listItems => {
                                    listItems.classList.toggle('swipe-sidebar-items')
                                })
                                ulSubmenuLayer.forEach(listItems => {
                                    try {
                                        if (eval(getListItem(0,1,'textContent','category'))) {
                                            ulSubmenuLayer.forEach(listItems => {
                                                listItems.classList.toggle('swipe-sidebar-items');
                                            })
                                        }
                                    } catch (err) {
                                        return;
                                    }
                                })
                            });
                        }
                        if (eval(getListItem(0,1,'localName','"i"'))) {
                            listItems.children[0].addEventListener('click', () => {
                                listItems.children[0].children[1].classList.toggle('accordion-in-icon');
                                listItems.children[1].classList.toggle('accordion-in');
                            });
                        }
                    } catch(err) {
                        return;
                    }
                })
            })
        })
    }
    // SIDEBAR-MAIN-MENU FUNCTIONALITY END
});