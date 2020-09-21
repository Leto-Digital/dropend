window.onload = function () {
    appendCSSFile();
    structureServicesBlocks();
};

function appendCSSFile() {
    var cssTag = document.createElement('link');
    cssTag.rel = 'stylesheet';
    cssTag.href = 'https://combinatronics.com/Leto-Digital/dropend/master/css/style.css';

    document.getElementsByTagName("head")[0].appendChild(cssTag);
}

function structureServicesBlocks() {
    var serviceBlocks = document.querySelectorAll('.service-block');
    var iconHTML = document.createElement('img');
    iconHTML.src = 'http://www.dropend.co.za/wp-content/uploads/2020/09/service-block-icon.png';
    iconHTML.className = 'icon';

    serviceBlocks.forEach(serviceBlock => {
        serviceBlock.appendChild(iconHTML.cloneNode(true));
    });

}