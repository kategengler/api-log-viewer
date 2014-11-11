import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    email: { refreshModel: true }
  },
  model: function(params){
    var defaultFilter = {filter: 'recent'};
    var filters = params || defaultFilter;
    return this.store.find('event', filters);
  }
});
