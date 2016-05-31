'use strict';

/**
 * @ngdoc function
 * @name firebaseAngularApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the firebaseAngularApp
 */
angular.module('firebaseAngularApp')
  .controller('LoginCtrl', function ($scope,auth,$state) {

  	var vm = this;

    vm.entrar = function() {
    		console.log($scope.user);
    	if ($scope.user) {
  		 	var promise = auth.logIn($scope.user);
  		 	promise.then(function  (data) {
  		 		console.log(data);
  		 		$state.go('home');
  		 	}).catch(function(error) {
			  	console.log(error);
			});
    	};
    };

  });
