module.exports = function(grunt) {

// Config

grunt.initConfig({
    concat: {
        js: {
            src: ['js/*.js'],
            dest: 'dist/scripts.js'
        },
        css:{
            src: ['css/*.css'],
            dest: 'dist/styles.css'
        }
    },
    uglify: {
        build:{
            files: [{
                src: "dist/scripts.js",
                dest: "dist/scripts.js",
            }]
        }
    }
});

//Load plugins

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
//Register tasks
grunt.registerTask('concat-js', ['concat:js']);
grunt.registerTask('concat-css', ['concat:css']);

}