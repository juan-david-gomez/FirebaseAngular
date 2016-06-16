'use strict';

/**
 * @ngdoc function
 * @name firebaseAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firebaseAngularApp
 http://www.jvandemo.com/learn-how-to-make-authentication-in-your-angular-applications-simpler-and-more-consistent/
 */
app
  .controller('MainCtrl', function ($scope) {
  	
  	$scope.uiConfig = {
	    calendar: {
	        lang: 'es',
	        // height: 450,
	        editable: true,
	        header: {
	            left: 'title',
	            center: 'agendaDay,agendaWeek,month',
	            right: 'today prev,next'
	        }
	    }
	};
    $scope.eventSources = [];
	
});
