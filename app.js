(function(){
  'use strict';

  angular.module('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){

    $scope.checkIfTooMuch = function(){
      var foodAll = $scope.foodInput;
      var enjoyMsg = "Enjoy!";
      var tooMuchMsg = "Too much!";
      var enterData = "Please enter data first";
      var redColor = 'red';
      var greenColor = 'green';


      if (foodAll === '' || foodAll === undefined){
        $scope.messageAboutFood = enterData;
        $scope.fontColor = redColor;
        $scope.borderColor = redColor;
      }
      else if (foodAll != undefined && foodAll != ""){
        var spaces = /\s*,\s*/;
        var foodArray = foodAll.split(spaces);
        foodArray = foodArray.filter(Boolean);

        if(foodArray.length <=3){
          $scope.messageAboutFood = enjoyMsg;
          $scope.fontColor = greenColor;
          $scope.borderColor = greenColor;
        }
        else{
          $scope.messageAboutFood = tooMuchMsg;
          $scope.fontColor = greenColor;
          $scope.borderColor = greenColor;
        }
      }
    }
  }
})();
