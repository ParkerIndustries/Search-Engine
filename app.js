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

function searchController($scope){
	$scope.movies = [
	{name:"The Godfather",releaseYr:"1972"},
	{name:"Inception",releaseYr:"2010"},
	{name:"Harry Potter and the Chamber of Secrets",releaseYr:"2012"},
	{name:"Titanic",releaseYr:"1997"},
	{name:"Thor:Ragnarok",releaseYr:"2017"},
	{name:"Forest Gump",releaseYr:"1994"},
	{name:"Star Wars",releaseYr:"1977"},
	{name:"Justice League",releaseYr:"2017"},
	{name:"The Dark Knight",releaseYr:"2008"},
	{name:"Avatar",releaseYr:"2009"},
	{name:"The Avengers",releaseYr:"2012"}
	];
}
