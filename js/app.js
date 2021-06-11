window.onscroll = () => {

    const scroll = window.scrollY;
    const headerScroll = document.querySelector('.header-scroll');

    if ( scroll > 200 ) {
        headerScroll.classList.add('active');
    } else {
        headerScroll.classList.remove('active');
    }
};