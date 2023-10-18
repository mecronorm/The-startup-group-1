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
    var homeUl = document.body.getElementsByClassName('homeUl')[0];

    if (verticalScrollPx > 1 || windowWidth < 1024) {
        if (homeNav != null) homeNav.classList.add('bg-blue-200');
        if (homeNav != null) homeNav.classList.remove('p-10');
        if (homeNav != null) homeNav.classList.add('p-2');
        if (homeUl != null) homeUl.classList.add('m-auto');
        if (homeNav != null) homeNav.classList.remove('bg-hero');
        nav.classList.add('shadow');
    } else {
        if (homeNav != null) homeNav.classList.remove('bg-blue-200');
        if (homeNav != null) homeNav.classList.add('p-10');
        if (homeNav != null) homeNav.classList.remove('p-2');
        if (homeUl != null) homeUl.classList.remove('m-auto');
        if (homeNav != null) homeNav.classList.add('bg-hero');
        nav.classList.remove('shadow');
    }
}