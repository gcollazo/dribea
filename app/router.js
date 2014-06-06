var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('popular');
  this.resource('debuts');
  this.resource('everyone');
});

export default Router;
