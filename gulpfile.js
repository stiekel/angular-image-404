var gulp = require('gulp');
var jade = require('gulp-jade');
var webserver = require('gulp-webserver');
var unlify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('prepareTest', function(){
  // jade file
  gulp
  .src('./example/index.jade')
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest('./public/'));
  // copy file
  gulp
  .src('./example/app.js')
  .pipe(gulp.dest('./public/'));
});

gulp.task('release', function(){
  // minify js file
  gulp
  .src('./src/angular-image-404.js')
  .pipe(uglify())
  .pipe(rename('angular-image-404.min.js'))
  .pipe(gulp.dest('./dist/'));

  // copy file to dist
  gulp
  .src('./src/angular-image-404.js')
  .pipe(gulp.dest('./dist/'));
});

gulp.task('webserver', function(){
  gulp
  .src('public')
  .pipe(webserver({
    host: '0.0.0.0',
    livereload: true,
    open: false,
    fallback: 'index.html'
  }));
});


gulp.task('test', ['prepareTest', 'release', 'webserver']);