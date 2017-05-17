var app = angular.module("myApp",[])

app.controller("myCtrl", function($scope){
    var a;
    var b;
    $scope.taskList = [];
    $scope.add = function(){
        /*$scope.task = a;
        $scope.desc = b;*/
        /*console.log(a,b);*/ $scope.taskList.push($scope.taskName + " " + $scope.taskDesc);
    }
})