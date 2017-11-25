'use strict';

lambda.service('RESTapi', function ($http, $q, $rootScope) {

  var RESTapi = this;
  RESTapi.list = {};
  
  RESTapi.POST = function (obj,url) {
    var defer = $q.defer();
  
    $http({
    url: url,
    method: "POST",
    data: obj 
  })
  .success(function (res) {
          defer.resolve(res);
      })
      .error(function (err, status) {
          defer.reject(err);
      })
  
      return defer.promise;
  }
  
  return RESTapi;

  });