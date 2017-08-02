/**
 * Created by Admin on 13.07.2017.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {'css/style.css': 'css/source/_module.less'}
            }
        },
        watch: {
            css: {
                files: ['css/*.less','css/**/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false
                }
            }
        },
        csscomb: {
            dynamic_mappings: {
                expand: true,
                cwd: 'css/source/components',
                src: ['*.less'],
                dest: 'css/source/components',
                ext: '.less'
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'last 2 Chrome versions', 'Firefox > 20', 'ie 8', 'ie 9']
            },
            dist: {
                src: 'css/**/*.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-csscomb');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Default task(s).
    grunt.registerTask('default', ['csscomb', 'less', 'autoprefixer', 'watch']);

};