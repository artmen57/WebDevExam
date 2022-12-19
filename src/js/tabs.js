const tab = document.querySelectorAll('.news_tabs_item'),
      tabParant = document.querySelector('.news_tabs_wrapper');

tabParant.addEventListener('click', e=>{
    const target = e.target;

    if (target.classList.contains('news_tabs_item') && !target.classList.contains('active')){
        removeClass();
        target.classList.add('active');
    } else {
        removeClass();
    }
});

function removeClass(){
    tab.forEach(item => {
        item.classList.remove('active');
    });
}