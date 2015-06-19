'use strict';

/**
 * @ngdoc overview
 * @name angularjsScrolltofixedApp
 * @description
 * # angularjsScrolltofixedApp
 *
 * Main module of the application.
 */
angular
  .module('scrollToFixed', [
    'ngRoute'
  ])
  .config(function ($routeProvider,stfConfig) {
        stfConfig ={
            marginTop :10
        };
    $routeProvider
      .when('/', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
