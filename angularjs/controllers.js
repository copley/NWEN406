'use strict';

lambda.controller('chartjsController', function ($scope, RESTapi) {


    $scope.requestObj = {l4 : 'Vvuc' , maxi : '100' , loops : '1' , times : '10' , conc : 'on' ,  mb : '1024'} ; 

    $scope.init = function () {
        $scope.post(); 
    }
    
    $scope.post = function () {    
        RESTapi.POST( $scope.requestObj, 'http://35.163.140.165:5000/post')
        .then(function (res) {
          // succes
          $scope.chartjs (res.json) ; 
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


    $scope.init();
})

.controller('rawsqlController', function ($scope, RESTapi) {

    $scope.defaultSQL  = 'select * from students'
    $scope.requestObj = {sqlStatement : $scope.defaultSQL} ; 

    $scope.$watch('defaultSQL', function () {
        $scope.requestObj.sqlStatement = $scope.defaultSQL;
    })
    $scope.init = function () {
        $scope.post(); 
    }
    


    
    $scope.post = function (be) { 
        var url = ""; 
        be=='py'? url =  'http://35.163.140.165:1114/sql' :   url =  'http://35.163.140.165:8000/api/todo/PostToFlask';
        RESTapi.POST( $scope.requestObj, url )
        .then(function (res) {  debugger ;
          // succes  
            //$scope.$apply(function () {
                $scope.sqlResponse = res;
           // });
        }, function (err) {
          // error
        })
    }
    
    $scope.get = function () {    // http://35.163.140.165:1114/sql 
        RESTapi.GET('http://35.163.140.165:8000/api/todo')
        .then(function (res) {  debugger ;
          // succes  
            //$scope.$apply(function () {
                $scope.sqlResponse = res;
           // });
        }, function (err) {
          // error
        })
    }



})
.controller('homeController', function ($scope, RESTapi) {




})
;




