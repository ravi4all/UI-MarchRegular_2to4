var app = angular.module('myApp',[]);

/*
app.controller('myCtrl',function($scope){
    $scope.arr = [];
    $scope.add = function(){
        $scope.arr.push($scope.a_name);
    }
})*/

app.controller('myCtrl', function($scope){

    $scope.arr = [
        {'id':101,'name':'Ram','age':20},
        {'id':102,'name':'Shyam','age':30}
    ]

})