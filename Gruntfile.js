module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            dist: {
                src: [
                    'js/src/components/axis-base.js',
                    'js/src/components/navSplash.js',
                    'js/src/components/imgBG.js',
                    'js/src/components/tabsSizer.js',
                    'js/src/components/albumScripts.js',
                    'js/src/components/resizeSiteWrap.js',
                    'js/src/components/sidemenu.js',
                    'js/src/components/cteBuild.js',
                    'js/src/components/adminScriptToggle.js',
                    'js/src/components/fullHeightPalb.js',
                    'js/src/components/responsiveCarousel.js',
                    'js/src/components/weatherTxtFormatter.js',
                    'js/src/components/override-palb.js',
                    'js/src/components/ada'
                ],
                dest: 'js/dist/axisbundle.js'
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