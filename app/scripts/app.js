'use strict';

/**
 * @ngdoc overview
 * @name bmsAngularApp
 * @description
 * # bmsAngularApp
 *
 * Main module of the application.
 */
angular
  .module('bmsAngularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/home/homeView.html',
        controller: 'home',
        controllerAs: 'home'
      })
      .when('/show/:movieId',{
        templateUrl: 'scripts/shows/movieShowsView.html',
        controller: 'show',
        controllerAs: 'show'
      })
      .when('/booking/:movieId/:theater',{
        templateUrl: 'scripts/booking/bookingView.html',
        controller: 'booking',
        controllerAs: 'booking'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
