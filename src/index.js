console.log("hi, i'm working correctly");

const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0YWthc3BvIiwiYSI6ImNqdDRpeTQxYTFiaWQzeXM3dWkwZjRzM3QifQ.jAnO0WiWcomi90mJ_JHlCw';

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
});

buildMarker("activity", [-74.009151, 40.705086]);




