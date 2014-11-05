var gulp = require('gulp')
  , browserify = require('browserify')
  , source = require('vinyl-source-stream')
  , buffer = require('vinyl-buffer')
  , uglify = require('gulp-uglify')
  , sourcemaps = require('gulp-sourcemaps')

var getBundleName = function () {
  // var version = require('./package.json').version
  //   , name = require('./package.json').name
  // return version + '.' + name + '.' + 'min'
  return 'bundle'
}

gulp.task('js', function () {

  var bundler = browserify({
    entries: ['./js/main'],
    debug: true
  })

  var bundle = function () {
    return bundler
      .bundle()
      .pipe(source(getBundleName() + '.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./'))
  }

  return bundle()
})