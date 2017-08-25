/*
This gulpfile :
- Minimify images
- Concat CSS files
- Add autoprefixers
- Minimify CSS files
- Concat JS files
*/

// Configurations
var config = {
    'root': 'dist/',
    'src' : 'src/',
    'dist': 'dist/'
}


// Dependencies
var gulp          = require( 'gulp' ),
    css_nano      = require( 'gulp-cssnano' ),
    rename        = require( 'gulp-rename' ),
    plumber       = require( 'gulp-plumber' ),
    sass          = require( 'gulp-sass' ),
    autoprefixer  = require( 'gulp-autoprefixer' ),
    concat        = require( 'gulp-concat' ),
    imagemin      = require( 'gulp-imagemin' ),
    uglify        = require( 'gulp-uglify' );



// Connect
gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        livereload: true
    });
});


// PHP
gulp.task('php', () => {
    return gulp.src( [
        './src/**/*.php'
        ] )
        .pipe(gulp.dest('./dist/'));
})


// Images
gulp.task('img', () => {
    return gulp.src( [
        './src/img/**/**'
        ] )
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img/'));
})


// Fonts
gulp.task('fonts', () => {
    return gulp.src( [
        './src/fonts/**'
        ] )
        .pipe(gulp.dest('./dist/fonts/'));
})


// Sass
gulp.task( 'sass', function()
{
    return gulp.src( './src/scss/*.scss' )      // Get Sass files
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest('./dist/css'))
} );


// JS task
gulp.task( 'js', function()
{
    return gulp.src( ['./src/js/*.js'] )        // Get JS files
        .pipe( concat( 'script.js' ) )     // Concat in one file
        .pipe( uglify() )                // Minify them (problem with ES6)
        .pipe( gulp.dest( './dist/js/' ) );     // Put it in folder
} );



// Watch task
gulp.task( 'watch', function()
{
    gulp.watch( './src/scss/**/**', [ 'sass' ] );
    gulp.watch( './src/js/**/**', [ 'js' ] );
    gulp.watch( './src/**/*.php', [ 'php' ] );
    gulp.watch( './src/img/**/**', [ 'img' ] );
    gulp.watch( './src/fonts/**/**', [ 'fonts' ] );
} );



gulp.task( 'default', [ 'php', 'sass', 'js', 'img', 'fonts', 'watch' ] );