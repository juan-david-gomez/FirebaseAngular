'use strict';

/**
 * @ngdoc function
 * @name firebaseAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firebaseAngularApp
 http://www.jvandemo.com/learn-how-to-make-authentication-in-your-angular-applications-simpler-and-more-consistent/
 */
angular.module('firebaseAngularApp')
  .controller('MainCtrl', function ($scope,auth,$state) {

    $scope.salir = function() {
	      auth.logOut();
	      $state.go('login');
	};
	
});
