angular.module('highmountain', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "highmountainwebsite/views/home.html"
            })
            .state('about',{
                url:'/about',
                templateUrl: "highmountainwebsite/views/about.html"
            })
            .state('services',{
                url:'/services',
                templateUrl: "highmountainwebsite/views/services.html"
            })
            .state('ownership',{
                url:'/ownership',
                templateUrl: "highmountainwebsite/views/ownership.html",
            })
            .state('contact',{
                url:'/contact',
                templateUrl: "highmountainwebsite/views/contact.html",
            });

        $urlRouterProvider
            .otherwise('/');
    });
