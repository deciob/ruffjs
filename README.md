ruffjs
======

# A Finite State Machine for Leaflet zoom events.

## State variables:

* prev_zoom
* current_zoom
* prev_geo_state
* current_geo_state
* ???

## Events (these are leaflet events):

* zoomstart
* zoomend
* ???

## States:

* transition:open -> transition has started and callbacks are fired
* transition:closed -> transition has started and callbacks have ended
* static:open -> the transition has ended and callbacks are fired
* static:closed -> the transition has ended and callbacks have ended