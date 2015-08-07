(function(){
    'use strict';
	angular.module("retoApp",["ngRoute","ngResource","uiGmapgoogle-maps","ngAnimate","retoApp.controllers", "retoApp.services"])
	.config(function($routeProvider){
		$routeProvider
		.when("/", {
			controller: "MainCtrl",
			templateUrl: "assets/templates/main.html"
		})
		.when("/user/:id", {
			controller: "UserCtrl",
			templateUrl: "assets/templates/user.html"
		});
	})
})();