module.exports = function(grunt) {
  grunt.initConfig({
    'loopback_auto': {
      'pg': {
        options: {
          dataSource: 'pg',
          app: './server/server',
          config: './server/model-config',
          method: 'autoupdate'
        }
      }
    }
  });
  // Load the plugin
  grunt.loadNpmTasks('grunt-loopback-auto');
  // register tasks
  grunt.registerTask('autoupdate', ['loopback_auto:pg']);
  grunt.registerTask('default', ['autoupdate']);
};
