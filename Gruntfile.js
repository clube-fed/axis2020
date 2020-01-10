module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            dist: {
                src: [
                    './public/js/src/components/iePolyfills.js',
                    './public/js/src/components/axis-base.js',
                    './public/js/src/components/navOffcanvas.js',
                    './public/js/src/components/imgBG.js',
                    './public/js/src/components/tabsSizer.js',
                    './public/js/src/components/albumScripts.js',
                    './public/js/src/components/resizeSiteWrap.js',
                    './public/js/src/components/sidemenu.js',
                    './public/js/src/components/cteBuild.js',
                    './public/js/src/components/adminScriptToggle.js',
                    './public/js/src/components/fullHeightPalb.js',
                    './public/js/src/components/responsiveCarousel.js',
                    './public/js/src/components/weatherTxtFormatter.js',
                    './public/js/src/components/override-palb.js',
                    './public/js/src/components/ada.js'
                ],
                dest: './public/js/axisbundle.js'
            }
        },
        watch: {
            scripts: {
            files: ['**/*.js'],
            tasks: ['concat'],
            }
        },
    })

    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default.js', ['watch']);
}