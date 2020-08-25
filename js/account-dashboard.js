// sidebar active listItems START
let listItems = document.querySelectorAll('.menu>li>a');
if(listItems.length > 0) {
    for (let keyOn of Object.keys(listItems)) {
        listItems[keyOn].addEventListener('click', () => {
            for(let keyOff of Object.keys(listItems)) {
                if (keyOn !== keyOff) {
                    listItems[keyOff].style.color = "#9b9b9b";
                    listItems[keyOff].children[0].classList.remove('active-listItem-line-active');
                }
            }
            listItems[keyOn].children[0].classList.add('active-listItem-line-active');
            listItems[keyOn].style.color = "black";
        });
    }
}
// sidebar active listItems END

// sidebar responsivity START
let titleSidebar = document.querySelector('.title-menu');
let titleIsOpen = document.querySelector('.is-open');

let menu = document.querySelector('.menu');
let checker = false;

function sidebarState(open,opacity,height,color,transform) {
    return `
        titleIsOpen.style.height = "${open}px";
        menu.style.opacity 	= "${opacity}";
        menu.style.height = "${height}px";
        titleSidebar.style.color = "${color}";
        titleSidebar.children[1].style.transform = "${transform}";
    `;
}
if(titleSidebar && titleIsOpen && menu) {
    try {
        titleSidebar.addEventListener('click', () => {
            if (window.innerWidth < 991) {
                eval(sidebarState(63.2,1,305,'gray','rotate(-180deg)'));
                checker = true;
            }
        });

        titleIsOpen.addEventListener('click', (e) => {
            if (window.innerWidth < 991) {
                eval(sidebarState(0,0,0,'black','rotate(0deg)'));
                e.stopPropagation();
                checker = false
            }
        });

        window.addEventListener('resize', () => {
            if ((window.innerWidth > 991 && checker == true) || (window.innerWidth > 991 && checker == false)) {
                eval(sidebarState(0,1,305,'black','rotate(0deg)'));
            }
            if (((window.innerWidth <= 991 && window.innerWidth > 750) && checker == true) || ((window.innerWidth <= 991 && window.innerWidth > 750) && checker == false)) {
                eval(sidebarState(0,1,0,'black','rotate(0deg'));
            }
        });
    } catch(err) {}
}
// sidebar responsivity END
