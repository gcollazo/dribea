import ScrollingMixin from '../mixins/scrolling';

var IndexView = Ember.View.extend(ScrollingMixin, {
  didInsertElement: function() {
    this.bindScrolling();
  },

  willRemoveElement: function() {
    this.unbindScrolling();
  },

  scrolled: function() {
    if (this.isScrolledToBottom()) {
      this.get('controller').send('getMore');
    }
  },

  isScrolledToBottom: function() {
    var distanceToViewportTop = ($(document).height() - $(window).height());
    var viewPortTop = $(document).scrollTop();

    if (viewPortTop === 0) {
      return false;
    }

    return (viewPortTop - distanceToViewportTop === 0);
  }
});

export default IndexView;
