// module.exports = function(spritename) {
  var config = require('../../config/task-config');
  var gulp = require('gulp');
  var copy = require('gulp-copy');
  var del = require('del');
  var spritesmith = require('gulp.spritesmith');
  var clean = require('gulp-clean');
  var gulpSequence = require('gulp-sequence');


  var spritename = '_sprite';
  var ext = 'css';
  var copyFiles = ['./src/images/sprites/*.' + ext];
  var pasteFolder = './src/css/sprites/';
  var imgsForSpriteFolder = config.imgsForSprite.folderName;

  // global.IMGS_FOR_SPRITE = imgsForSpriteFolder;
  
  gulp.task('makeSprite', function () {
    var spriteData = gulp.src( './src/images/' + imgsForSpriteFolder + '/*.png').pipe(spritesmith({
      imgName: spritename + '.png',
      cssName: spritename + '.' + ext,
      cssTemplate: './gulpfile/cssTemplates/template.handlebars',
      imgPath: '../images/sprites/' + spritename + '.png'
    }));
    return spriteData.pipe(gulp.dest( './src/images/sprites'));
  });

  gulp.task('copySpriteCss',function(){
      return gulp.src(copyFiles)
      .pipe(copy(pasteFolder,{prefix:4}));
  });

  gulp.task('removeImgsForSpriteAndScss',function(){
    return gulp.src(['./src/images/' + imgsForSpriteFolder ,'./src/images/sprites/' + spritename + '.' + ext])
    .pipe(clean())
  });

  gulp.task('cleanAllSprites',function(){
    return gulp.src(['./src/images/sprites','./src/css/sprites'])
    .pipe(clean());
  })

  gulp.task('createSprite',gulpSequence('cleanAllSprites','makeSprite','copySpriteCss','removeImgsForSpriteAndScss'));
