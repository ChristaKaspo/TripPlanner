const map = require('./index')

const buildMarker = (type, coordinates) => {
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    if(type === "activity") {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
        map(markerDomEl)
        .setLngLat(coordinates)
        .addTo(map)
    } else if (type === `hotel`) {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
        map(markerDomEl)
        .setLngLat(coordinates)
        .addTo(map)
    } else if (type === `restaurant`) {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
        map(markerDomEl)
        .setLngLat(coordinates)
        .addTo(map) 
    }
}

module.exports = buildMarker;