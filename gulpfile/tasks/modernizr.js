var gulp = require('gulp');
var mnzr = require('gulp-modernizr');
var path = require('path');


gulp.task('modernizr', function(){
    var rootPath = path.resolve() + '/../../';

    return gulp.src([ rootPath +'/src/css/**/*.scss', rootPath + '/src/js/**/*.js' ])
    .pipe(mnzr({
        "options": [
            "setClasses"
        ]
    }))
    .pipe(gulp.dest(rootPath + '/src/js/modules/'));
});