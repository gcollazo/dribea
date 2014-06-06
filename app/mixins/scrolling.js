var ScrollingMixin = Em.Mixin.create({

  bindScrolling: function() {
    var onScroll = function() {
      Ember.run.debounce(this, this.scrolled(), 1000);
    }.bind(this);

    $(document).bind('touchmove', onScroll);
    $(window).bind('scroll', onScroll);
  },

  unbindScrolling: function() {
    $(window).unbind('scroll');
    $(document).unbind('touchmove');
  }

});

export default ScrollingMixin;
