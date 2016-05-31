'use strict';

/**
 * @ngdoc function
 * @name firebaseAngularApp.controller:RegistroCtrl
 * @description
 * # RegistroCtrl
 * Controller of the firebaseAngularApp
 */
angular.module('firebaseAngularApp')
  .controller('RegistroCtrl', function ($scope,auth,$state) {

  	var vm = this;

    vm.registrar = function() {
    		console.log($scope.user);
    	if ($scope.user) {
  		 	var promise = auth.singIn($scope.user);
  		 	promise.then(function  (data) {
  		 		console.log(data);
  		 		$state.go('home');
  		 	}).catch(function(error) {
			  console.log(error);
			});
    	};
    };
  });
