window.onload = () => { 
    search();
    subMenu();
}

const search = () => {
    const searchIcon = document.getElementsByClassName('search__icon')[0];
    const searchForm = document.getElementsByClassName('search__form')[0];

    searchIcon.addEventListener("click", () => {
        searchForm.classList.toggle('show');
    });
}

const subMenu = () => {
    const menuItems = document.getElementsByClassName('menu__item');

    for(let menu of menuItems) {
        let subMenuClass;
        menu.addEventListener("mouseover", (e) => {
            e.preventDefault;
            for(let cl of menu.classList) {
                if(cl.startsWith('menu__item--')) {
                    menu.classList.add('active');
                    let subMenuClass = cl.replace('menu__item', 'sub-menu');
                    showSubMenu(subMenuClass);
                }
            }
        });
        // window.addEventListener("click", (e) => {
        //     e.preventDefault;
        //         if (e.currentTarget !== 'sub-menus') {
        //             let menu = document.querySelector('.sub-menu.show');
        //             menu.remove
        //         }
        // });
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

