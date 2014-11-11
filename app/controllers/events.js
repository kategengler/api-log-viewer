import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['email'],
  email: null,
  actions: {
    reset: function(){
      this.set('email', null);
    }
  }
});
