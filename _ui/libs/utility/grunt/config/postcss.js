module.exports = {
    options: {
        map: true,
        processors: [
            require('autoprefixer')({browsers: ['> 0.5%', 'IE 11', 'Firefox ESR', 'not op_mini all']})
        ]
    },
    dev: {
        src: "_ui/skin/css/*.css"
    }
};
