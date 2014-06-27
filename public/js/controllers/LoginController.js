stoldab.controller("LoginController", function($scope, LoginService) {

	$scope.logIn = function () {
		LoginService.logIn();
	}
})
