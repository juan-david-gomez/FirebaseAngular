'use strict';

/**
 * @ngdoc service
 * @name firebaseAngularApp.sessionService
 * @description
 * # sessionService
 * Service in the firebaseAngularApp.
 */
function sessionService($log, localStorage){

    this._authData = JSON.parse(localStorage.getItem('session.authData'));

    this.getAuthData = function(){
      return this._authData;
    };

    this.setAuthData = function(authData){
      this._authData = authData;
      localStorage.setItem('session.authData', JSON.stringify(authData));
      return this;
    };

    this.getAccessToken = function(){
      if(this._authData && this._authData.token){
        return this._authData.token;
      }
      return null;
    };

    /**
     * Destroy session
     */
    this.destroy = function destroy(){
      this.setAuthData(null);
    };

}


  // Inject dependencies
sessionService.$inject = ['$log', 'localStorage'];

angular.module('firebaseAngularApp')
  .service('session', sessionService);
