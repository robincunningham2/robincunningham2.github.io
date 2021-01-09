
let resizeTimer;
const resizeCallback = () => {

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if ($(window).width() < 862)
            $(document.body).css('width', $(window).width() - 100);
        
    }, 250);
};

$(window).resize(resizeCallback);
resizeCallback();
