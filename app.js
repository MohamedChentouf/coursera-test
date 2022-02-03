(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.message = "";

  $scope.checkIfTooMuch = function () {
      var lunchMenuSplit = $scope.lunchMenu.split(',');
      if(lunchMenuSplit.length > 3){
        $scope.message = "Too much!";
      }
      else {
        $scope.message = "Enjoy!";
      }
  }
}

})();
