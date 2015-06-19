// Generated on 2015-06-19 using generator-angular 0.11.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-conventional-changelog');

    // Default task.
    grunt.registerTask('default', ['jshint', 'karma']);

    var testConfig = function(configFile, customOptions) {
        var options = { configFile: configFile, keepalive: true };
        var travisOptions = process.env.TRAVIS && { browsers: ['Firefox'], reporters: 'dots' };
        return grunt.util._.extend(options, customOptions, travisOptions);
    };

    // Project configuration.
    grunt.initConfig({
        karma: {
            options: testConfig('test/karma.conf.js'),
            singleRun: true
        },
        jshint:{
            files:['src/**/*.js', 'test/**/*.spec.js', 'demo/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        changelog: {
            options: {
                dest: 'CHANGELOG.md'
            }
        }
    });

};