app.controller('shopController', function($scope, myFactory){
    $scope.show = function(){
        var promise = myFactory.callServer();
        console.log(promise);
        promise.then(function(data){
            $scope.result = data;
        }), function(error){
            console.log(error);
        }
    }
})