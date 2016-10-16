'use strict';

CookingApp.controller("Recipes2Ctrl", function ($rootScope, $scope, $state, ionicMaterialInk, $timeout) {

    ionicMaterialInk.displayEffect();
    $rootScope.isRecipeInterface=true;
    
    $scope.moreDataCanBeLoaded=true;
    $scope.tab=[1];

    $scope.$on('ngLastRepeat.mylist',function(e) {
        ionicMaterialInk.displayEffect();
    });
    


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


})
.directive('ngLastRepeat', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngLastRepeat'+ (attr.ngLastRepeat ? '.'+attr.ngLastRepeat : ''));
                });
            }
        }
    }
});




