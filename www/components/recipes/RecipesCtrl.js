'use strict';

CookingApp.controller("RecipesCtrl", function ($rootScope, $scope, $state, ionicMaterialInk, $timeout) {

    ionicMaterialInk.displayEffect();
    $rootScope.isRecipeInterface=true;
    
    $scope.moreDataCanBeLoaded=true;
    $scope.tab=[1];

    


    $scope.loadMoreData = function(){
        console.log("data loaded");
        $timeout(function(){
            if($scope.tab.length<3){
                $scope.tab.push(3);
                $scope.moreDataCanBeLoaded=true;
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }
            else{
                $scope.moreDataCanBeLoaded=false;
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }

        }, 2000);
        

    };


});




