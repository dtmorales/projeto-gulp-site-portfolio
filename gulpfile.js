const gulp = require('gulp');
const gulpsass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// gulp.task('sass', function(cb){
    // gulp.src('./src/scss/main.scss')
    //     .pipe(sass())
    //     .pipe(gulp.dest('./dist/css'))
    //     cb()
// })

// gulp.task('default', gulp.series('sass'))

function watchFiles(){
    gulp.watch('./src/scss/**/*.scss', sass)
}

function sass(){
    return gulp.src('./src/scss/**/*.scss')
        .pipe(gulpsass())
        .pipe(gulp.dest('./src/css'))
}
exports.default = sass;
exports.watch = watchFiles;