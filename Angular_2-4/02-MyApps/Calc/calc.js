var app = angular.module('myApp',[]);

app.controller("myCtrl", function($scope){
    $scope.cal = function(opr){
        $scope.a = parseInt($scope.f_num);
        $scope.b = parseInt($scope.s_num);
        if (opr == '+') {
            $scope.ans = $scope.a + $scope.b;
        }
        else if (opr == '-') {
            $scope.ans = $scope.a - $scope.b;
        }
        else if (opr == '/') {
            $scope.ans = $scope.a / $scope.b;
        }
        else{
            $scope.ans = $scope.a * $scope.b;
        }
    }
})