// SERVICES
lambda.service('cityService', function() {
   
    this.city = "New York, NY";
    
});


lambda.service('cityService', function() {
   
   $http({
  method: 'GET',
  url: '/someUrl'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
    
});

'use strict';

/**
 * @ngdoc service
 * @name httpApp.task
 * @description
 * # task
 * Service in the httpApp.
 */
lambda
  .service('task', function task($http, $q, $rootScope) {

      var task = this;
      task.taskList = {};

      task.getAllTasks = function (obj) {
          var defer = $q.defer();

          $http({
        url: 'http://35.163.140.165:5000/post',
        method: "POST",
        data: obj 
    })
          .success(function (res) {
            //  task.taskList = res;
              defer.resolve(res);
          })
          .error(function (err, status) {
              defer.reject(err);
          })

          return defer.promise;
      }








      task.getOneTask = function (id) {
          var defer = $q.defer();

          $http.get($rootScope.endPoint + '/api/products/'+ id)
          .success(function (res) {
              //  task.taskList = res;
              defer.resolve(res);
          })
          .error(function (err, status) {
              defer.reject(err);
          })

          return defer.promise;
      }

      task.putOneTask = function (tid, tname) {
          var defer = $q.defer();

          $http.put($rootScope.endPoint + '/api/products/' + tid + '/'+tname)
          .success(function (res) {
              //  task.taskList = res;
              defer.resolve(res);
          })
          .error(function (err, status) {
              defer.reject(err);
          })

          return defer.promise;
      }





      task.createTask = function (tid, tname) {
          var defer = $q.defer();

          $http.post($rootScope.endPoint + '/api/products/' + tid + '/' + tname)
          .success(function (res) {
              defer.resolve(res);
          })
          .error(function (err, status) {
              defer.reject(err);
          })

          return defer.promise;
      }

      task.deleteTask = function (id) {
          var defer = $q.defer();

          $http.delete($rootScope.endPoint + '/deleteTask?taskId=' + id)
          .success(function (res) {
              defer.resolve(res);
          })
          .error(function (err, status) {
              defer.reject(err);
          })

          return defer.promise;
      }

      return task;

  });