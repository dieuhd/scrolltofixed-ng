'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ngRoute',
    'scrolltofixed-ng'
  ])
  .config(function ($routeProvider,stfConfig) {
        stfConfig.marginTop = 10;
        stfConfig.dontSetWidth = false;
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
