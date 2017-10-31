var gulp = require('gulp');
var path = require('path');
var gulpSequence = require('gulp-sequence');

gulp.task('refresh', ['modernizr']);

gulp.task('watchScss',function(){
    var rootPath = path.resolve() + '/../../';
    gulp.watch( rootPath + '/src/css/**/*.scss',['refresh'] );
});