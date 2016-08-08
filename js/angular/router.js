var sampleApp = angular.module('init', ['ngRoute', 'controllers']);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'template/default.html',
        controller : 'find'
      })
      .when('/maps/:string', {
        templateUrl: 'template/map.html',
        controller : 'map'
      })
      .when('/maps', {
        templateUrl: 'template/map.html',
        controller : 'mapNoString'
      })
      .when('/error', {
        templateUrl: 'template/error.html'
      })
      .otherwise({
        redirectTo: '/error'
      });
  }]);