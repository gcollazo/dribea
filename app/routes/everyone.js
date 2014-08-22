import Ember from 'ember';

var EveryoneRoute = Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.$.getJSON('https://api.dribbble.com/shots/everyone/?page=1&callback=?', function(data) {
        resolve(data.shots);
      });
    });
  }
});

export default EveryoneRoute;
