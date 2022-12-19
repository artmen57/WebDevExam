const menu = document.querySelector('.header_nav_menu'),
      hamburger = document.querySelector('.hamburger'),
      close = document.querySelector('.header_nav_menu_close'),
      menuItem = document.querySelectorAll('.header_nav_menu_item');

hamburger.addEventListener('click', () =>{
    menu.classList.add('header_nav_menu_active');
});

close.addEventListener('click', () =>{
    menu.classList.remove('header_nav_menu_active');
});

menuItem.forEach(element =>{
    element.addEventListener('click', ()=>{
        menu.classList.remove('header_nav_menu_active');
    });
});

