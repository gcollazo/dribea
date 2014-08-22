import Ember from 'ember';

var ScrollingMixin = Ember.Mixin.create({

  bindScrolling: function() {
    var onScroll = function() {
      Ember.run.debounce(this, this.scrolled(), 1000);
    }.bind(this);

    Ember.$(document).bind('touchmove', onScroll);
    Ember.$(window).bind('scroll', onScroll);
  },

  unbindScrolling: function() {
    Ember.$(window).unbind('scroll');
    Ember.$(document).unbind('touchmove');
  }

});

export default ScrollingMixin;
