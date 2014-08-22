import Ember from 'ember';

var PopularRoute = Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.$.getJSON('http://api.dribbble.com/shots/popular/?page=1&callback=?', function(data) {
        resolve(data.shots);
      });
    });
  }
});

export default PopularRoute;
