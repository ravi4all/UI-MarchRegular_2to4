var app = angular.module("MyApp",[])

app.controller("MyCtrl", function($scope){
    $scope.msg = "Hello Angular";
    $scope.add = function(){
        var a = $scope.fno;
        var b = $scope.sno;
        var c = parseInt(a) + parseInt(b);
        console.log(c);
        $scope.sum = c;
        return $scope.sum;
    }
});