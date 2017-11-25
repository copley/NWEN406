// ROUTES
lambda.config(function ($routeProvider) {
   
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })   
    .when('/chartjs', {
        templateUrl: 'pages/chartjs.htm',
        controller: 'chartjsController'
    })
    
    .when('/rawsql', {
        templateUrl: 'pages/rawsql.htm',
        controller: 'rawsqlController'
    })
    
    .when('/forecast/:days', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
    
});