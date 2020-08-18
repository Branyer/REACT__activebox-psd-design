const button = document.querySelector('.menu__button');
const menu = document.querySelector('.header__nav');
const menuItems = document.querySelectorAll('.menu__item');


let showMenu = false;

menuItems.forEach((item) => { 
    item.addEventListener('click', () => {

        menu.classList.remove('opacity');
        setTimeout(() => {
            menu.classList.remove('show');
        }, 500); 

        showMenu = !showMenu;
    })
})


button.addEventListener('click', () => {

    if(!showMenu) {
        menu.classList.add('show');
        setTimeout(() => {
            menu.classList.add('opacity');
        }, 0)
    }else {

        menu.classList.remove('opacity');
        setTimeout(() => {
            menu.classList.remove('show');
        }, 500)
    }

    showMenu = !showMenu;

})

