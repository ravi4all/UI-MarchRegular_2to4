/*
calcApp.controller('calcController', function($scope, myFactory){
    $scope.add = function(){
        $scope.result = myFactory.add($scope.f_num, $scope.s_num);
    }
    $scope.sub = function(){
        $scope.result = myFactory.sub($scope.f_num, $scope.s_num);
    }
})
*/

calcApp.controller('calcController', function($scope, myService){
    $scope.add = function(){
        $scope.result = myService.obj.add($scope.f_num, $scope.s_num);
    }
    $scope.sub = function(){
        $scope.result = myService.obj.sub($scope.f_num, $scope.s_num);
    }
})
