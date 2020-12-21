// Trigger nice Scroll
$("body").niceScroll({
    cursorcolor: '#00bfe7',
    cursorborder: 'none',
    cursorwidth:"6px"
});

// Adding Classes To The Links
var myLis = document.querySelectorAll('.navbar li');
myLis.forEach( li => {
    li.onclick = function () {
        if (!li.classList.contains('active')) {
            li.classList.add('active');
        }
    }
    if (!li.classList.contains('active')) {
        li.classList.add('hovering');
    }
});
