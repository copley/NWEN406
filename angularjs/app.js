// MODULE
var lambda = angular.module('weatherApp', ['ngRoute', 'ngResource']);

'use strict';

/**
 * @ngdoc overview
 * @name httpApp
 * @description
 * # httpApp
 *
 * Main module of the application.
 */
angular
  .module('httpApp', [

  ])
    .controller('CreatetaskCtrl', function ($scope, task, $modalInstance) {
      $scope.init = function () {
          $scope.task = {
              Id: '',
              FileName: ''
          }
      }

      $scope.submit = function () {
          task.createTask($scope.task)
          .then(function () {
              $modalInstance.close();
          }, function () {
              $scope.task = {
                  Id: 'Failed',
                  FileName: 'Failed'
              }
          })
      }

      $scope.init();
  })

  .run(function ($rootScope) {
      $rootScope.endPoint = 'http://localhost:63218'
  });