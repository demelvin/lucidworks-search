const webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [{ pattern: 'spec.bundle.js', watched: false }],

    plugins: [
        'karma-sourcemap-loader',
        'karma-webpack',
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-jasmine',
        'karma-junit-reporter'
    ],
    
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { 'spec.bundle.js': ['webpack', 'sourcemap'] },
    
    webpack: webpackConfig,
    
    webpackServer: {
    	noInfo: 'errors-only'
    },

    // list of files to exclude
    exclude: [],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    junitReporter: {
    	outputFile: 'test_out/unit.xml',
    	suite: 'unit'
    }
  })
}