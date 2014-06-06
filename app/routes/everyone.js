var EveryoneRoute = Ember.Route.extend({
  model: function() {
    return new Em.RSVP.Promise(function(resolve) {
      $.getJSON('http://api.dribbble.com/shots/everyone/?page=1&callback=?', function(data) {
        resolve(data.shots);
      });
    });
  }
});

export default EveryoneRoute;
