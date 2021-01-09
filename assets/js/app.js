
const resizeCallback = () => {
    if ($(window).width() < 862)
        $(document.body).css('width', $(window).width() - 100);
};

$(window).resize(resizeCallback);
resizeCallback();
