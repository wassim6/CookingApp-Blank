'use strict';

CookingApp.controller("Recipes4Ctrl", function ($rootScope, $scope, $state, ionicMaterialInk, ionicMaterialMotion, $timeout) {

    ionicMaterialInk.displayEffect();
    $rootScope.isRecipeInterface=true;
    

    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();


    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });


});




