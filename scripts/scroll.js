addScrollListener();

function addScrollListener() {
    window.addEventListener('scroll', () => {
        const verticalScrollPx = window.scrollY;
        const windowWidth = window.innerWidth;
        
        var nav = document.body.getElementsByTagName('nav')[0];
        var ul = document.body.getElementsByTagName('ul')[0];

        if (verticalScrollPx > 1) {
            nav.classList.add('fixed');
            nav.classList.add('top-0');
            nav.classList.add('bg-blue-200');
            nav.classList.remove('p-10');
            nav.classList.add('p-2');
            ul.classList.add('m-auto');
            nav.classList.remove('bg-hero');
        } else if (windowWidth > 1024) {
            nav.classList.remove('fixed');
            nav.classList.remove('top-0');
            nav.classList.remove('bg-blue-200');
            nav.classList.add('p-10');
            nav.classList.remove('p-2');
            ul.classList.remove('m-auto');
            nav.classList.add('bg-hero');
        }
    });
}