'use strict';

angular.module('myApp.view23', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view23', {
    templateUrl: 'view23/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);