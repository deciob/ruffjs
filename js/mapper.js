define([
    'func',
    'asevented',
    'ruff',
    'leaflet'
], 
function (func, asEvented, Ruff, L) {

    var conf = {
        circle_style: {
            fillColor: "#4E8ABD",
            color: "#fff",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        }
    }

    function initMap () {
        return L.map('map').setView([-15, -60], 4);
    }

    function initBaseLayer (map) {
        var osm_url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            osm_attrib='Map data © OpenStreetMap contributors';
        return L.tileLayer(osm_url, { attribution: osm_attrib }).addTo(map);
    }

    function setRadius (attr) {
        //console.debug("setRadius", attr)
        return 100000 * attr;
    }

    function addGeoJSON (map, json) {
        return L.geoJson( [json], {
            style: function (feature) { return conf.circle_style; },
            //onEachFeature: onEachFeature
            pointToLayer: function (feature, latlng) {
                return L.circle(latlng)
                    .setRadius( setRadius(feature.properties.sample_val) );
                }
            }
        ).addTo(map);
    }


    return {
        initMap: initMap,
        initBaseLayer: initBaseLayer,
        addGeoJSON: addGeoJSON
    }

    

});