

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    prefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

gulp.task('sassy', function () {
  return sass('scss/main.scss')
    .on('error', sass.logError)
    .pipe(prefixer('last 2 versions'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
});


gulp.task('sync', function(){
    browserSync.init({
        server: './',
        notify: false,
        browser: "google chrome canary"
    });

    gulp.watch('scss/*.scss', ['sassy']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
});


gulp.task('default', ['sassy', 'sync']);
