module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'main.min.css': 'main.less'
                }
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './main.css'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flattern: true,
                        src: ['./index.html']
                    }
                ]
            },
        },
        uglify: {
            target: {
                files: {
                    './main.min.js':'./main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['replace', 'less','uglify'])
}