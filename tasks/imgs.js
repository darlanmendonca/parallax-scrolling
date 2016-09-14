'use strict';

let gulp = require('gulp');
let config = require('./gulp.config.js');

gulp.task('imgs', imgsTask);

function imgsTask() {
  return gulp
    .src(config.imgs.src)
    .pipe(gulp.dest(config.imgs.dest));
}
