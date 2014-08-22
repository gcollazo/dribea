import Ember from 'ember';

var DebutsRoute = Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.$.getJSON('http://api.dribbble.com/shots/debuts/?page=1&callback=?', function(data) {
        resolve(data.shots);
      });
    });
  }
});

export default DebutsRoute;
