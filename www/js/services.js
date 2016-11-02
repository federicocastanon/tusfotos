angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.factory('BaseLocal', function() {
  var pouchdb = new PouchDB('baseLocal');
  
  return pouchdb;
})
.factory('BaseEventos', function() {
  var pouchdb = new PouchDB('baseEventos');  
  return pouchdb;
})
.factory('BaseFotos', function() {
  var pouchdb = new PouchDB('baseFotos');  
  return pouchdb;
})

.service('BlankService', [function(){

}]);