module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer'),
        require('postcss-import'),
        require('postcss-mixins'),
        require('postcss-for'),
        require('postcss-nested'),
        require('postcss-simple-vars'),
        require('postcss-cssnext')
    ]
}