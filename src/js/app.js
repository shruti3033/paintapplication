angular.module('PaintApp',['ngMaterial','ngAnimate', 'app.paint.controller', 'ngRoute'])
.config(['$routeProvider','$locationProvider',
         function($routeProvider, $locationProvider) {
             $routeProvider
                 .when('/payment', {
                     path: "/payment",
                     templateUrl:"./src/templates/payment.html",
                     controller:'payController'
                 })
                 .when('/author', {
                     path: "/author",
                     templateUrl:"./src/templates/author.html",
                     controller:'authController'
                 })
                 .when('/', {
                    path: "/",
                    templateUrl:"./src/templates/paint.html",
                    controller:'paintController'
                })
                 
             }])
  .controller('paintContrl',['$routeParams',function($routeParams){
	  this.params = $routeParams;
  }])
 .directive('paintHeader', function() {
  return {
    templateUrl: './src/templates/paintheader.html'
  };
});

