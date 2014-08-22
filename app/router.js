import Ember from 'ember';

var Router = Ember.Router.extend({
  location: DribeaENV.locationType
});

Router.map(function() {
  this.resource('popular');
  this.resource('debuts');
  this.resource('everyone');
});

export default Router;
