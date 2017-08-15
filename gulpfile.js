var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');

gulp.task('sass', function () {
    return gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('css1'));
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['sass']);
});


gulp.task('default', [ 'css' ]);