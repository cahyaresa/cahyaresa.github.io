module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/styles.css': 'sass/styles.scss'
                }
            }
        },
        includes: {
            build: {
                cwd: 'html',
                src: ['*.html'],
                dest: 'build/',
                options: {
                    flatten: true,
                    includePath: 'html',
                }
            }
        },
		
		cssmin : {
			 options: {
				style: 'compressed',
			  },
			target : {
				src : ["css/styles.css"],
				dest: 'combined/combined.min.css'
			}
		},
		
	
		uglify: {
		  options: {
			beautify:false,	
			mangle: false
		  },
		  build: {
			files: {
				'combined/combined-vendor.min.js':[
					'../common/js/_autoload.js',
				],
				
				'combined/combined-lib.min.js': [
					'../common/js/_autoload.js',
				], 
				
			}
		  }
		},
        watch: {
            html: {
                files: ['html/*.html'],
                tasks: ['includes'],
                options: { livereload: true },
                event: ['added', 'deleted']
            },
            css: {
                files: 'sass/**/*.scss',
                tasks: ['sass','cssmin']
            },
			js: {
				files: ['js/*.js', 'js/vendor/*.js', '../common/js/*.js'],
				tasks: ['uglify']
			},
        },
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-includes');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Task definitions
    grunt.registerTask('default', ['includes', 'cssmin', 'uglify', 'watch']);
};
