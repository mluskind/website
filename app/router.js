import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('show');
  this.route('gemconf');
  this.route('pages', { path: 'pages/:slug' });
  this.route('videos', function() {});
  this.route('video', { path: 'videos/:slug' });
});

export default Router;
