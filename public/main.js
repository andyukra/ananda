new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: false,
});
const elem = document.querySelector('.fp-watermark');
elem.parentNode.removeChild(elem);