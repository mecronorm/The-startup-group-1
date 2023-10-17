addScrollListener();

function addScrollListener() {
    window.addEventListener('scroll', () => {
        const verticalScrollPx = window.scrollY;
        var nav = document.body.getElementsByTagName('nav')[0];

        if (verticalScrollPx > 1) {
            nav.classList.add('fixed');
            nav.classList.add('top-0');
            nav.classList.add('bg-blue-200');
            nav.classList.remove('p-10');
            nav.classList.add('p-2');
            nav.classList.remove('bg-hero');
        } else {
            nav.classList.remove('fixed');
            nav.classList.remove('top-0');
            nav.classList.remove('bg-blue-200');
            nav.classList.add('p-10');
            nav.classList.remove('p-2');
            nav.classList.add('bg-hero');
        }
    });
}