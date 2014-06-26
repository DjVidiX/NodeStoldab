var stoldab = angular.module('stoldab', ['ui.bootstrap', 'ui.router']);

stoldab.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/state1");
    //
    // Now set up the states
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
    .state('state2.list', {
        url: "/list",
        templateUrl: "partials/state2.list.html",
        controller: function($scope) {
            $scope.things = ["A", "Set", "Of", "Things"];
        }
    })
});
