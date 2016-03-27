var gulp = require('gulp');
var jade = require('gulp-jade');
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

var jsFiles = [
  './node_modules/angular/angular.js',
  './src/angular-image-404.js',
  './example/app.js'
];

var cssFiles = [
  './node_modules/bootstrap/dist/css/bootstrap.css'
];

var bundleFileName = {
  css: 'style.css',
  js: 'bundle.js'
}

gulp.task('prepareTest', function(){
  // jade file
  gulp
  .src('./example/index.jade')
  .pipe(jade({
    pretty: true,
    locals: {
      bundleFileName: bundleFileName
    }
  }))
  .pipe(gulp.dest('./public/'));
  // copy file
  gulp
  .src(jsFiles)
  .pipe(concat(bundleFileName.js))
  .pipe(gulp.dest('./public/'));

  gulp
  .src(cssFiles)
  .pipe(rename(bundleFileName.css))
  .pipe(gulp.dest('./public/'))
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

gulp.task('watch', function(){
  gulp.watch(['./src/angular-image-404.js', './angular-image-404.js', './example/index.jade', './example/app.js'], ['prepareTest']);
});

gulp.task('webserver', function(){
  gulp
  .src('public')
  .pipe(webserver({
    host: '0.0.0.0',
    livereload: true,
    open: false
  }));
});


gulp.task('test', ['prepareTest', 'release', 'webserver', 'watch']);