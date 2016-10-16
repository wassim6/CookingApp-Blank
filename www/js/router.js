'use strict';

CookingApp.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider

    .state('intro', {
        url: '/',
        templateUrl: 'components/walkthrough/walkthrough.html',
        controller: 'WalkthroughCtrl'
    })
    .state('login', {
        url: '/login',
        templateUrl: 'components/login/login.html',
        controller: 'LoginCtrl'
    })
    .state('signup', {
        url: '/signup',
        templateUrl: 'components/signup/signup.html',
        controller: 'SignupCtrl'
    })
    .


    state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'components/menu/menu.html',
        controller: 'MenuCtrl'
    })

    .state('app.recipes', {
        url: '/recipes',
        views: {
            'menuContent': {
                templateUrl: 'components/recipes/recipes.html',
                controller: 'RecipesCtrl'
            }
        }
    })
    .state('app.recipes2', {
        url: '/recipes2',
        views: {
            'menuContent': {
                templateUrl: 'components/recipes2/recipes2.html',
                controller: 'Recipes2Ctrl'
            }
        }
    })
    .state('app.recipes3', {
        url: '/recipes3',
        views: {
            'menuContent': {
                templateUrl: 'components/recipes3/recipes3.html',
                controller: 'Recipes3Ctrl'
            }
        }
    })
    .state('app.recipes4', {
        url: '/recipes4',
        views: {
            'menuContent': {
                templateUrl: 'components/recipes4/recipes4.html',
                controller: 'Recipes4Ctrl'
            }
        }
    })
    .state('recipes5', {
        url: '/recipes5',
        templateUrl: 'components/recipes5/recipes5.html',
        controller: 'Recipes5Ctrl'
    })
    
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
})
