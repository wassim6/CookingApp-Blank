'use strict';

CookingApp.controller("WalkthroughCtrl", function ($scope, $state, ionicMaterialInk) {

    ionicMaterialInk.displayEffect();
    $scope.slideIndex = 0;


    $scope.onSwipeLeft = function(){
        $state.go('login');
    };
    $scope.goToLogin = function () {
      $state.go('login');  
    };

    // Called each time the slide changes
    $scope.slideChanged = function (index) {
        console.log(index);
        $scope.slideIndex = index;
    };


        

});




