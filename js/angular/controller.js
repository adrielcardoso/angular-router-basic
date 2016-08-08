angular.module('controllers', []).

	controller('find', function($scope){

		$scope.find = function()
		{
			$scope.load = true;
		}
	})

	.controller('map', function($scope, $routeParams){
		console.log($routeParams.string);
	})

	.controller('mapNoString', function($scope){});