addScrollListener();

function addScrollListener() {
    window.addEventListener('scroll', () => {
        changeNavclasses();
    });

    window.addEventListener('resize', () => {
        changeNavclasses();
    });
}

function changeNavclasses() {
    const verticalScrollPx = window.scrollY;
    const windowWidth = window.innerWidth;
    
    var nav = document.body.getElementsByTagName('nav')[0];
    var homeNav = document.body.getElementsByClassName('homeNav')[0];
    var ul = document.body.getElementsByTagName('ul')[0];

    if (verticalScrollPx > 1 || windowWidth < 1024) {
        if (homeNav != null) homeNav.classList.add('bg-blue-200');
        nav.classList.remove('p-10');
        nav.classList.add('p-2');
        ul.classList.add('m-auto');
        nav.classList.remove('bg-hero');
        nav.classList.add('shadow');
    } else {
        if (homeNav != null) homeNav.classList.remove('bg-blue-200');
        nav.classList.add('p-10');
        nav.classList.remove('p-2');
        ul.classList.remove('m-auto');
        nav.classList.add('bg-hero');
        nav.classList.remove('shadow');
    }
}