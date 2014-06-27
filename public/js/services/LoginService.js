stoldab.factory("LoginService", function($http) {
	return {
		logIn: function() {
			return $http.post("/api/login");
		}
	}
})
