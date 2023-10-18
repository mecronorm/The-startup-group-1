var homeNav = document.body.getElementsByClassName('homeNav')[0];
var nav = document.body.getElementsByTagName('nav')[0];
var homeUl = document.body.getElementsByClassName('homeUl')[0];

addScrollListener();

function addScrollListener() {
    window.addEventListener('scroll', () => {
        changeNavclasses();
    });

    window.addEventListener('resize', () => {
        changeNavclasses();
    });

    initHeader();
}

function initHeader() {
    const verticalScrollPx = window.scrollY;
    const windowWidth = window.innerWidth;

    if (homeNav != null && homeUl != null) {
        if (verticalScrollPx == 0 && windowWidth > 1024) {
            homeNav.classList.add('bg-white');
        } else if (windowWidth < 1024) {
            homeNav.classList.add('bg-blue-200');
            homeNav.classList.remove('bg-hero');
            homeNav.classList.remove('p-10');
            homeNav.classList.add('p-2');
            homeUl.classList.add('m-auto');
        }
    }
}

function changeNavclasses() {
    const verticalScrollPx = window.scrollY;
    const windowWidth = window.innerWidth;
    
    if( verticalScrollPx > 1) nav.classList.add('shadow');
    else nav.classList.remove('shadow');

    if (homeNav != null && homeUl != null) {
        if (verticalScrollPx > 1 || windowWidth < 1024) {
            homeNav.classList.add('bg-blue-200');
            homeNav.classList.remove('p-10');
            homeNav.classList.add('p-2');
            homeUl.classList.add('m-auto');
            homeNav.classList.remove('bg-hero');
        } else {
             homeNav.classList.remove('bg-blue-200');
             homeNav.classList.add('bg-white');
             homeNav.classList.add('p-10');
             homeNav.classList.remove('p-2');
             homeUl.classList.remove('m-auto');
             homeNav.classList.add('bg-hero');
        }
    }
}