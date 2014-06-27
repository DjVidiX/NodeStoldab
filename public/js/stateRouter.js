stoldab.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");

	$stateProvider
	.state('todo', {
		url: "/todo",
		templateUrl: "templates/todoList.html",
		controller: "TodoController"
	})
	.state('pictures', {
		url: "/pictures",
		templateUrl: "templates/pictures.html",
		controller: "PicturesController"
	})
	.state('admin', {
		url: "/admin",
		templateUrl: "templates/admin.html"
	})
	.state('clock', {
		url: "/clock",
		templateUrl: "templates/clockpicker.html",
		controller: "ClockController"
	})
	.state('admin.login', {
		url: "/login",
		templateUrl: "templates/login.html",
		controller: "LoginController"
	})
});
