var gulp = require('gulp');
var zip = require('gulp-zip');
var fs = require('fs');
var dateFormat = require('dateformat');

function archive() {
    var time = dateFormat(new Date(), "yyyy-mm-dd_HH-MM");
    var pkg = JSON.parse(fs.readFileSync('./package.json'));
    var title = pkg.name + '_' + time + '.zip';
    var package = [
        "!**/config/**",
        "!**/node_modules/**",
        "!**/gulpfile/**",
        "!**/packaged/**",
        "!**/src/**",
        "!**/codesniffer.ruleset.xml",
        "!**/composer.json",
        "!**/composer.lock",
        "!**/config.yml",
        "!**/config.default.yml",
        "!**/package.json",
        "!**/package-lock.json",
        "!**/webpack.config.js",
        "!**/yarn.lock",
        "!**/gulpfile.js",
        "**/*"
    ]
  
    return gulp.src(package)
      .pipe(zip(title))
      .pipe(gulp.dest('packaged'));
  }

  gulp.task("zip", archive);