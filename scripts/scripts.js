import {
    Collapse,
    Dropdown,
    Ripple,
    Carousel,
    initTE
} from 'tw-elements';

initTE({ Collapse, Dropdown, Ripple, Carousel });
addScrollListener();

function addScrollListener() {
    window.addEventListener('scroll', () => {
        const verticalScrollPx = window.scrollY;
    
        if (verticalScrollPx < 500) {
            document.body.style.backgroundColor = 'red';
        } else if (verticalScrollPx >= 500 && verticalScrollPx < 1000) {
            document.body.style.backgroundColor = 'green';
        } else {
            document.body.style.backgroundColor = 'lightblue';
        }
    });
    console.log('hey"');
}