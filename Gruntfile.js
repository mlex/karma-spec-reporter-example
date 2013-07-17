use strict';
var path = require('path');

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                browsers: ['PhantomJS'],
                singleRun: true
            }
        }
    });

    var runner = require('karma').runner;
    var server = require('karma').server;
    var _ = grunt.util._;
    grunt.registerMultiTask('karma', 'run karma.', function() {
        var done = this.async();
        var options = this.options({
            background: false
        });
        var data = this.data;

        //merge options onto data, with data taking precedence
        data = _.merge(options, data);
        data.configFile = path.resolve(data.configFile);
        if (data.configFile) {
            data.configFile = grunt.template.process(data.configFile);
        }

        server.start(
            data,
            function(code) {
                done(!code);
            });
    });

    grunt.registerTask('test', ['karma']);
};
