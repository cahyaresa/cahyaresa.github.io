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
                    'vendors/nice-select/js/jquery.nice-select.min.js',
                    'vendors/isotope/imagesloaded.pkgd.min.js',
                    'vendors/isotope/isotope-min.js',
                    'vendors/owl-carousel/owl.carousel.min.js',
                    'js/jquery.ajaxchimp.min.js',
                    'js/mail-script.js'

				],
				
				'combined/combined-lib.min.js': [
                    'js/jquery-3.3.1.js',
                    'js/popper.js',
                    'js/bootstrap.js',
                    'js/bootstrap.bundle.js',
                    'js/stellar.js',
                    'js/jquery.magnific-popup.min.js',

                ],
                
                'combined/combined-custom.min.js' : [
                    'js/myjs.js'
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
