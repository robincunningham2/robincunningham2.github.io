
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

const dataCallback = (data) => {
    $('div.grid-container').html(null);

    data.portfolio.forEach(proj => {
        const element = `
        <a href="${proj.repo}" target="_blank">
            <div class="item">
                <div class="img" style="background-image: url(${proj.image});"></div>
                <div class="text">${proj.name}</div>
            </div>
        </a>
        `;

        $('div.grid-container').append(element);
    });
};

$.get('data.json', dataCallback);
