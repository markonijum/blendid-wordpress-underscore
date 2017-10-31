class ResponsiveNav {

  constructor(selector,options = {}){
    var self = this;
    $(document).ready(function(){
        self.init(selector,options);
    });
  }

  init(selector,options){
    var that = this;
    this.responsiveNav = require('responsive-nav');
    this.default = {
      animate: true,
      transition: 284,
      label: 'Menu',
      insert: "before",
      customToggle: "",
      closeOnNavClick: true,
      openPos: "relative",
      navClass: "nav-collapse",
      navActiveClass: "js-nav-active",
      jsClass: "js",
      init: function(){},              
      open: function(){},  
      close: function(){}
    };
    $.extend(this.default,options);
    this.responsiveNav(selector,this.default);
  }
}

module.exports = ResponsiveNav;

