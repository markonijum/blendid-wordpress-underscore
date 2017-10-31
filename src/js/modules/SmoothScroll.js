class SmoothScroll {
    
  constructor(selector ,options = {}){
    var self = this;
    $(document).ready(function(){
        self.init(selector,options);
    })
  }

  init(selector,options){
    var that = this;
    this.smoothScroll = require('smooth-scroll');
    this.default = {
        speed: 2000  
    };
    $.extend(this.default,options);
    this.ssObj = new this.smoothScroll(selector,this.default);
  }
}

module.exports = SmoothScroll;