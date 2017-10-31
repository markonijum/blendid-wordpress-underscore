var path = require('path');
var themeFolderName = "" //Type folder name of your theme here!

module.exports = {
  html        : false,
  images      : true,
  fonts       : true,
  static      : false,
  svgSprite   : true,
  ghPages     : false,
  stylesheets : true,
  php         : true,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: ["./app.js"],
      vendor: ["./vendor.js"]
    },

    publicPath: path.join('/wp-content/themes', themeFolderName, 'assets/js'),

    provide: {
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      // Tether: "tether",
      // "window.Tether": "tether",
      // i18next: "i18next"
    }
  },

  stylesheets: {
    sass: {
      "includePaths": [
        "./node_modules",
        "./node_modules/bourbon/app/assets/stylesheets",
        "./node_modules/bootstrap/scss",
        "./node_modules/slick-carousel/slick",
        "./node_modules/font-awesome/scss",
        "./node_modules/tooltipster/src/css",
        "./node_modules/tooltipster/src/css/plugins/tooltipster/sideTip"
      ]
    }
  },

  browserSync: {
    //Set localhost server e.g "mysite.dev"
    proxy: "",
    files: ["./**/*.php"]
  },

  production: {
    rev: false
  },

additionalTasks: {
  initialize(gulp, PATH_CONFIG, TASK_CONFIG) {

    this.development.prebuild = (this.development.prebuild != undefined && this.development.prebuild.length > 0) ? this.development.prebuild : undefined;
    this.development.postbuild = (this.development.postbuild.length != undefined && this.development.postbuild.length > 0) ? this.development.postbuild : undefined;

    this.production.prebuild = (this.production.prebuild != undefined && this.production.prebuild.length > 0) ? this.production.prebuild : undefined;
    this.production.postbuild = (this.production.postbuild.length != undefined && this.production.postbuild.length > 0) ? this.production.postbuild : undefined;

    require('../gulpfile/tasks/modernizr');
    require('../gulpfile/tasks/watchScss');
    
     if(TASK_CONFIG.php) {
      var revReplace = require('gulp-rev-replace')
      var path       = require('path')
      
      // 5) Update asset references in functions.php file
      gulp.task('update-php', function(){
        var manifest = gulp.src(path.resolve(process.env.PWD, PATH_CONFIG.dest, "rev-manifest.json"))
        return gulp.src(path.resolve(process.env.PWD, 'functions.php'))
          .pipe(revReplace({ manifest: manifest, replaceInExtensions:['.php'] }))
          .pipe(gulp.dest(path.resolve(process.env.PWD, PATH_CONFIG.dest)))
      })
    }

  },
  development: {
    prebuild: ['modernizr'],
    postbuild: ['watchScss']
  },
  production: {
    prebuild: [],
    postbuild: ['update-php']
      }
    },

  imgsForSprite: {
    folderName: 'imgSprite'
    }
    
  }
