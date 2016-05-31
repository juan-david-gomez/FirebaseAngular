'use strict';

/**
 * @ngdoc service
 * @name firebaseAngularApp.AuthService
 * @description
 * # AuthService
 * Service in the firebaseAngularApp.
 */
  function AuthService($q, $firebaseAuth, session){

    var ref = new Firebase('https://testauthjuan.firebaseio.com/');
    var authObj = $firebaseAuth(ref);

    this.isLoggedIn = function(){
      return session.getAuthData() !== null;
    };

    this.logIn = function(user){
      return authObj
        .$authWithPassword({
		    email: user.email,
		    password: user.password
		  })
        .then(
          function(authData){
            session.setAuthData(authData);
            return $q.resolve(authData);
          },
          function(error){
            return $q.reject(error);
          }
        );

    };

    this.logOut = function(){
      authObj.$unauth();
      session.destroy();
    };

    this.singIn = function(user) {
    	var self = this;
    	return authObj.$createUser({
			  email: user.email,
			  password: user.password
		}).then(function(userData) {
			  console.log("User " + userData.uid + " created successfully!");
			  return self.logIn(user);
		}).then(function(authData) {
			  console.log("Logged in as:", authData.uid);
		}).catch(function(error) {
			  return $q.reject(error);
		});
    };

  }

  	// Inject dependencies
  	AuthService.$inject = ['$q', '$firebaseAuth', 'session'];
  
	angular.module('firebaseAngularApp')
  .service('auth', AuthService);
