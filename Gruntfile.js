module.exports = function(grunt) {
    var path = require('path');

    // Detect project and environment settings
    grunt.config('settings', grunt.file.readJSON('./package.json'));
    grunt.config('server', grunt.file.readJSON('/usr/local/lib/swansonrussell/server.json'));

    // Detect user settings
    if(grunt.file.exists(process.env['HOME'] + '/.gruntuser.json')) {
        grunt.config('user', grunt.file.readJSON(process.env['HOME'] + '/.gruntuser.json'));
    }

    // Automatically load config and override files
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), './_ui/libs/utility/grunt/config'),
        overridePath: path.join(process.cwd(), './_ui/skin/grunt')
    });
};
