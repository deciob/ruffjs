var config = module.exports;
config['browser-all'] = {
  autoRun: false,
  environment: 'browser',
  rootPath: '../',
  // libs will put some script tags into the browser, 
  // so require will be ready once tests start executing. 
  // They're loaded first and in order
  libs: [
    'js/vendor/require-2.0.6.js'
  ],
  sources: [
    'js/**/*.js'
  ],
  tests: ['test/tests/*.js'],
  extensions: [require('buster-amd')]
};