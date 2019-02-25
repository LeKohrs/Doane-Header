window.onload = () => { 
    search();
    subMenu();
    mobileIcon();
}

const search = () => {
    const searchIcon = document.getElementsByClassName('search__icon')[0];
    const searchForm = document.getElementsByClassName('search__form')[0];

    searchIcon.addEventListener("click", () => {
        searchForm.classList.toggle('show');
        searchIcon.classList.toggle('active');
    });
}

const subMenu = () => {
    const menuItems = document.getElementsByClassName('menu__item');

    for(let menu of menuItems) {
        let subMenuClass;
        let subMenus = document.getElementsByClassName('sub-menus')[0];
        menu.addEventListener("click", (e) => {
            e.preventDefault;
            for(let menu of menuItems) {
                menu.classList.remove('active');            
            }
            for(let cl of menu.classList) {
                if(cl.startsWith('menu__item--')) {
                    menu.classList.add('active');
                    let subMenuClass = cl.replace('menu__item', 'sub-menu');
                    showSubMenu(subMenuClass);
                }
            }
        });
    }
}

const showSubMenu = (className) => {
    const subMenuItem = document.getElementsByClassName(className)[0]
    const subMenuItems = document.getElementsByClassName('sub-menu');
    const subMenus = document.getElementsByClassName('sub-menus')[0];
    subMenus.classList.remove('active');
    for(let item of subMenuItems) {
        item.classList.remove('show');
    }
    subMenuItem.classList.add('show');
    subMenus.classList.add('active');
}

const mobileIcon = () => {
    let mobileIcon = document.getElementsByClassName('mobile-menu')[0];
    let subMenus = document.getElementsByClassName('sub-menus')[0];

    if(mobileIcon) {
        mobileIcon.addEventListener('click', () => {
            mobileIcon.classList.toggle('active');
            subMenus.classList.toggle('active');
        })
    }
}