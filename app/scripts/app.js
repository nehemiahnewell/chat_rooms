/*global angular*/
(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
    });
    $stateProvider
      .state('home', {
      url: '/',
      controller: 'HomeCtrl as home',
      templateUrl: '/templates/home.html'
    });
  }
  angular
    .module('chatRooms', ['ui.router','firebase','ui.bootstrap'])
    // .module('chatRooms', ['ui.router','firebase'])
    .config(config);
})();