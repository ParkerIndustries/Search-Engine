<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="style.css">
	<script src="https://code.angularjs.org/1.6.9/angular.min.js"></script>
	<script src="app.js"></script>
</head>
<body>
	<!-- Initialize a new AngularJS app searchApp-->
	<div ng-app="searchApp" ng-controller="myApp" style="width:500px">
		<div>
			<h2>Search Engine Example</h2>
		</div>
		<div class="bar">
			  <!-- Create a binding between the searchString model 
			  	and the text field -->
			  	<input type="text" ng-model="searchString" 
			  	placeholder="Search" />
		</div>
		<ul>
			 <!-- li entries in the items array. Notice
		 	the custom search filter "searchFor". -->
		 	<li ng-repeat="m in movies | searchFor:searchString">
		 		<p>{{m.releaseYr}} : {{m.name}}</p>
		 	</li>
		</ul>
	</div>
	<div ng-app="myApp" ng-controller="movies">
		<table>
			<tr ng-repeat="x in names">
				<td>{{x.title}}</td>
			</tr>
		</table>
	</div>
</body>
</html>
