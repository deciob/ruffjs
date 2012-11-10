buster.spec.expose();

require.config({
  baseUrl: 'js/',
  paths: {
    domReady: 'vendor/domReady-2.0.1',
    func: 'vendor/horn/func',
    dom: 'vendor/horn/dom',
    horn: 'vendor/horn/horn',
    asevented: 'vendor/asevented-0.3.3',
    nut: 'vendor/hornjs/nut',
    leaflet: 'vendor/leaflet/dist/leaflet-src'
  }
});

require(['mapper'], function(mapper) {

  buster.testCase("pre_condition_tests", {
      "True is always true!" : function() {
          //console.log('xxxx', mapper)
          assert.equals( true===true, true);
      }
  });

});