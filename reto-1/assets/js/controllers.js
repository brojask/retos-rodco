angular.module("retoApp.controllers",[])
.controller('MainCtrl', function($scope, UsersModel){
	$scope.users = UsersModel.query();	
})
.controller('UserCtrl', function($scope, UsersModel, $routeParams){		
	var longitude = null, latidude = null;
	UsersModel.get({id: $routeParams.id}, function(res){		
		$scope.user = res;
		longitude = res.location.lng;
		latidude = res.location.lat;		
		$scope.map = { center: { latitude: latidude, longitude: longitude }, zoom: 8 };
		$scope.marker = { coords: { latitude: latidude, longitude: longitude }, id: 1};
		$scope.marker.options = {
            draggable: false,
            //labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
      };
	});
})