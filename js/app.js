angular.module('highmountain', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

      var baseUrl = /local|127/.test(window.location.hostname) ? '' : '/highmountainwebsite';

        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: baseUrl + "/views/home.html"
            })
            .state('about',{
                url:'/about',
                templateUrl: baseUrl + "/views/about.html"
            })
            .state('services',{
                url:'/services',
                templateUrl: baseUrl + "/views/services.html"
            })
            .state('ownership',{
                url:'/ownership',
                templateUrl: baseUrl + "/views/ownership.html",
            })
            .state('contact',{
                url:'/contact',
                templateUrl: baseUrl + "/views/contact.html",
            });

        $urlRouterProvider
            .otherwise('/');
    });
    var event = new Event('lastJsLoaded');
    document.dispatchEvent(event);
