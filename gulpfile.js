/**
 * Created by: Devin Metivier
 * Date: 3/17/2017.
 *
 * npm install gulp gulp-sass gulp-autoprefixer --save-dev --legacy-bundling
 */

'use strict';
const gulp = require('gulp');

// CSS Processing
const scss = require('gulp-sass');
// const autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function () {
    return gulp.src('scss_styles/scss/layout.scss')
        .pipe(scss({
            outputStyle: 'compact'
        }))
        // .pipe(autoprefixer({
        //     browsers: ['last 4 versions', 'Chrome <= 20','Firefox <= 20', 'Opera <= 20', 'Explorer <= 20', 'ie 6-8']
        // }))
        // .pipe(gulp.dest('_assets_/css'));
        .pipe(gulp.dest('scss_styles/css'));
});

gulp.task('scss:watch', function () {
    gulp.watch('scss_styles/scss/*.scss', ['css']);
});