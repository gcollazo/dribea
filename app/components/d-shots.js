import Ember from 'ember';
import ScrollingMixin from '../mixins/scrolling';

var DShotsComponent = Ember.Component.extend(ScrollingMixin, {
  page: 1,
  isLoadingMore: false,

  getMore: function() {
    this.set('isLoadingMore', true);
    this.incrementProperty('page');

    Ember.run.later(this, function() {
      var self = this,
          feed = this.get('feed'),
          page = this.get('page');

      var url = 'https://api.dribbble.com/shots/' + feed + '/?page=' + page + '&callback=?';

      Ember.$.getJSON(url, function(data) {
        self.shots.pushObjects(data.shots);
        self.set('isLoadingMore', false);
      });

    });
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
    var distanceToViewportTop = (Ember.$(document).height() - Ember.$(window).height());
    var viewPortTop = Ember.$(document).scrollTop();

    if (viewPortTop === 0) {
      return false;
    }

    return (viewPortTop - distanceToViewportTop === 0);
  }
});

export default DShotsComponent;
