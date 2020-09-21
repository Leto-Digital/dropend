window.onload = function () {
    structureServicesBlocks();
};

function structureServicesBlocks () {
    var serviceBlocks = document.querySelectorAll('.service-block');
    var iconHTML = document.createElement('img');
    iconHTML.src = 'www.dropend.co.za/wp-content/uploads/2020/09/service-block-icon.png';
    iconHTML.className = 'icon';

    for (var n = 0; n < serviceBlocks.length; n++) {
        serviceBlocks[n].appendChild(iconHTML);
    }

}