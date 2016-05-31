'use strict';

/**
 * Auth Refenrece http://www.jvandemo.com/learn-how-to-make-authentication-in-your-angular-applications-simpler-and-more-consistent/
 * @ngdoc overview
 * @name firebaseAngularApp
 * @description
 * # firebaseAngularApp
 *
 * Main module of the application.
 */
angular
  .module('firebaseAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'firebase',
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

   $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm',
        params: {
          'requireLogin': true, 
        },
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        params: {
          'requireLogin': false,
        }, 
        controllerAs: 'vm'
      })
      .state('registro', {
        url : '/registro',
        templateUrl: 'views/registro.html',
        controller: 'RegistroCtrl',
        params: {
          'requireLogin': false, 
        },
        controllerAs: 'vm'
      });
    $urlRouterProvider.otherwise('/');
    
  }).run(function($rootScope, $location, $state, auth) {


    $rootScope.$on('$stateChangeStart', function(e, toState  , toParams
                                                   , fromState, fromParams) {
      
        if(!toParams.requireLogin){
           return; // no need to redirect 
        }

        // now, redirect only not authenticated
        if(auth.isLoggedIn() === false) {
            e.preventDefault(); // stop current execution
            $state.go('login'); // go to login
        }
    });
});
