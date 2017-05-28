(function() {
	var app = angular.module("MyApp", ['ngMaterial', "ui.router"]);
	app.filter("disciplineFilter", disciplineFilter);
	app.controller("disciplineListCtrl", disciplineListCtrl);
	app.controller("mapCtrl", mapCtrl);
	app.controller("appCtrl", appCtrl);
	app.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('altTheme')
			.primaryPalette('indigo')
        $mdThemingProvider.theme('default')
			.primaryPalette('teal')
	});
	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/list");
		$stateProvider
			.state('list', {
				url: "/list",
				templateUrl: "html/list.tmpl.html",
				controllerAs: 'discCtrl',
				controller: 'disciplineListCtrl'
			})
			.state('info', {
				url: "/info",
				templateUrl: "html/info.tmpl.html",
			})
			.state('map', {
				url: "/map",
				templateUrl: "html/map.tmpl.html",
				controllerAs: 'mapCtrl',
				controller: 'mapCtrl'
			})
			.state('settings', {
				url: "/settings",
				templateUrl: "html/settings.tmpl.html",
			})
			.state('profile', {
				url: "/profile",
				templateUrl: "html/profile.tmpl.html",
			})
	});
})();
