angular.module("retoApp.services",[])
.factory("UsersModel", function($resource){
	return $resource('http://sheltered-hollows-7317.herokuapp.com:80/api/orchards/:id', 
		{id: "@id"}, {update: {method: "PUT"}
	});
});