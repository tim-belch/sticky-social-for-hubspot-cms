var belchbsssc_ = (function(){
	return {
    container:     ".belch-sticky-social-super-container",
    icons:         ".bsssc-icon",
    trigger:       ".belch-sticky-social-super-container .bsssc-trigger",
    pseudoTrigger: ".belch-sticky-social-super-container .bsssc-social-pseudo-trigger",
    init: function(){
      window.$(this.container).closest('.widget-span').css({'min-height': 0});
      this.timeline = new TimelineMax({
        paused: true
      });
      this.initAnimation();
      this.createListeners();
    },
    initAnimation: function(){
      this.timeline.staggerFrom(this.icons, .4, {
        opacity:  0,
        top:      "-45px",
        left:     "-45px",
        ease:     Back.easeOut.config(1.7)
      }, 0.1);
    },
    createListeners: function(){
      window.$(this.trigger).on('mouseenter', function(){
        window.$(this.pseudoTrigger).addClass('open');
        this.play();
      }.bind(this));
      window.$(this.pseudoTrigger).on('mouseleave', function(e){
        var toEl = e.toElement || e.relatedTarget;
        if(typeof toEl != typeof undefined){
          if(window.$(toEl).hasClass("bsssc-icon") || window.$(toEl).hasClass("bsssc-a") || window.$(toEl).closest(".bsssc-a").length){
              // TODO:
          }else{
            window.$(this.pseudoTrigger).removeClass('open');
            this.reverse();
          }
        }
      }.bind(this));
    },
    play: function(){
      this.timeline.play();
    },
    reverse: function(){
      this.timeline.reverse();
    }
  }
})();
$(function(){
  belchbsssc_.init();
});
