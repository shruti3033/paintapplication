var module = angular.module('app.paint.controller',['app.paint.service']);

	module.$inject = ['$scope','imageService'];
	module.controller('paintController',function($scope, imageService){
		$scope.showFlip = [];
		$scope.flip = function(img){
			debugger;
			var time = new Date();
			$scope.time = time;
			$scope.showFlip[img.id] = true;
		}
		$scope.images = imageService.getImage();
		$scope.flipOnce = function(img){
			$scope.showFlip[img.id] = false;	
		}
		
	});
