'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');

gulp.task('sass', function () {
    gulp.src('./assets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./assets/scss/*.scss', ['sass']);
});



gulp.task('sprite', function () {
    var spriteData = gulp.src('assets/img/icons/sprite/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        imgPath: '../scss/sprite.png'
    }));
    return spriteData.pipe(gulp.dest('assets/scss/'));
});

