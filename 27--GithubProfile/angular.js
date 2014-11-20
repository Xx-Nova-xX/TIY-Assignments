(function() {
	var app = angular.module('githubProfile', [ ]);

	  app.controller('UserController', [$http, function($http){
	  	var user = this;
	  	user.info = [ ];
	  	$http.get('xxNovaxx.json').success(function(data){
	  		user.info = data;
	  	})
	  }]);
});