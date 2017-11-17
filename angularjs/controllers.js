// CONTROLLERS








'use strict';

/**
 * @ngdoc function
 * @name httpApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the httpApp
 */
lambda
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

  .controller('homeController', function ($scope, task) {
    
      $scope.requestObj = {l4 : 'Vvuc' , maxi : '100' , loops : '1' , times : '10' , conc : 'on' ,  mb : '1024'} ; 

      $scope.init = function () {

          $scope.post(); 
      }



      $scope.post = function () {    //debugger ; 
          task.getAllTasks( $scope.requestObj)
          .then(function (res) {
              // success
              $scope.taskList = res;
              console.log(   $scope.taskList);
              $scope.chartjs ($scope.taskList.json)
          }, function (err) {
              // error
          })
      }


      




          $scope.chartjs = function (data){
              var  t= [] ,    bgc = []  , lbal = [] ;  
              for (var i=0 ; i<data.length ; i++) {
                 t.push (data[i].durationSeconds) ; 
                 lbal.push (i) ; 
                 var l = i.toString().length ;
                 if (l==1) bgc.push ('#'+i+'00') ; 
                  if (l==2) bgc.push ('#'+i+'0') ; 
                   if (l==3) bgc.push ('#'+i) ;
                    if (l>3) bgc.push ('#000') ; 
              }
            
    
                   if  (document.getElementById("myChart")!=null)  
                   {
                     document.getElementById("myChart").remove() ;
                 
                   }
                    var c = document.createElement('canvas') ;
                      c.setAttribute("id", 'myChart');
                      document.getElementById("cv").appendChild(c);
                   
              var ctx = document.getElementById("myChart").getContext('2d');
          var myChart = new Chart(ctx, {
              type: 'bar',
              data: {
                  labels: lbal,
                  datasets: [{
                      label: '# of Votes',
                      data: t,
                      backgroundColor: bgc,
                      borderColor: bgc,
                      borderWidth: 1
                  }]
              },
              options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero:true
                          }
                      }]
                  }
              }
          });
                  
     
      }


      $scope.getOne = function (id) {
          task.getOneTask(id)
          .then(function (res2) {
              // success
              console.log("ap2 succedg");
              $scope.OneTask = res2;
          }, function (err) {
              // error
          })
      }



      $scope.putOne = function (tid, tname) {
          $scope.thisID = tid;
          $scope.thisName = tname;

        //  $scope.add


          task.putOneTask(tid, tname)
          .then(function (res) {
              // success
              console.log("put success");
              $scope.getAll();
           
          }, function (err) {
              // error 
              console.log("put API request failed");
          })
      }



      $scope.create = function () {

         

          var modalInstance = $modal.open({
              templateUrl: '/Views/create.html',
              controller: 'CreatetaskCtrl'
          });

          modalInstance.result.then(function () {
              // success
              $scope.getAll();
          }, function () {
              // error
              $scope.getAll();
          })
      }



      $scope.deleteTask = function (id) {
          task.deleteTask(id)
          .then(function (res) {
              // success
              $scope.getAll();
          }, function () {
              // error
              $scope.getAll();
          })
      }

  $scope.init();
  });




