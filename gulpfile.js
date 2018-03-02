var gulp = require('gulp'),
	webserver = require('gulp-webserver'),
	compass   = require('gulp-compass');;

gulp.task('webserver', function() {
  gulp.src('../excellence-sport/')
    .pipe(webserver({
      port:1234,
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('compass',function(){
    return gulp.src('sass/*.sass')
        .pipe(compass({
            config_file: '../excellence-sport/config.rb',
            sourcemap: true,
            time: true,
      css: 'css/',
      sass: 'sass/',
      style: 'compact' //nested, expanded, compact, compressed
        }))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch',function(){
    gulp.watch('sass/*.sass',['compass']);
});

gulp.task('default',['webserver','compass','watch']);