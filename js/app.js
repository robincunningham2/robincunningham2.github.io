
// Make sure jQuery is loaded instead of firefox's default '$' function.
const jq = document.createElement('script');
jq.src = '/js/jquery.min.js';
document.body.appendChild(jq);
jq.addEventListener('load', () => {
    console.log(window.$ == jQuery);
});

function scroll(y) {
    $('html, body').animate({ scrollTop: y }, 300);
}

$(document).scroll(() => {
    if ($(document).scrollTop() >= 200) {
        $('#header').attr('class', 'white');
    } else {
        $('#header').attr('class', null);
    }
});

$('section.top .button').click(() => {
    scroll(650);
});
