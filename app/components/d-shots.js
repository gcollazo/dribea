import ScrollingMixin from '../mixins/scrolling';

var DShotsComponent = Ember.Component.extend(ScrollingMixin, {
  page: 2,
  isLoadingMore: false,

  getMore: function() {
    this.set('isLoadingMore', true);

    this.incrementProperty('page');
    var url = 'http://api.dribbble.com/shots/' + this.get('feed') + '/?page=' + this.get('page') + '&callback=?';

    $.getJSON(url, function(data) {
      this.shots.pushObjects(data.shots);
      this.set('isLoadingMore', false);

    }.bind(this));
  },

  didInsertElement: function() {
    this.bindScrolling();
  },

  willRemoveElement: function() {
    this.unbindScrolling();
  },

  scrolled: function() {
    if (this.isScrolledToBottom()) {
      this.getMore();
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

export default DShotsComponent;
