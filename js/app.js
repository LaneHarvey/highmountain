angular.module('highmountain', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "js/views/home.html"
            })
            .state('about',{
                url:'/about',
                templateUrl: "js/views/about.html"
            })
            .state('services',{
                url:'/services',
                templateUrl: "js/views/services.html"
            })
            .state('ownership',{
                url:'/ownership',
                templateUrl: "js/views/ownership.html",
            })
            .state('contact',{
                url:'/contact',
                templateUrl: "js/views/contact.html",
            });
        // $urlRouterProvider
        //     .otherwise('/');
    });

function openNav() {
    document.getElementById("mySidenav").style.width = "320px";
    document.getElementById("mySidenav").style.height = "667px";
};

    /* Set the width of the side navigation to 0 */

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
};
