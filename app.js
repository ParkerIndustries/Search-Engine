var app = angular.module("searchApp", []);

app.filter('searchFor', function(){
	return function(dataArr, searchString){

		if(!searchString){
			return dataArr;
		}

		var result = [];
		searchString = searchString.toLowerCase();
		angular.forEach(dataArr, function(item){
			if(item.name.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}
		});
		return result;
	};
});



var apdb = angular.module("myApp", []);
console.log("OK");
apdb.controller('movies', function($scope, $http) {
	$http.get("acces.php").then(function (response) {
		console.log(response);
		$scope.names = response.data.records;});
});
