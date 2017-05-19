app.controller('itemCtrl', function($scope, itemFactory){
    $scope.add = function(){
        var itemOperation = new Item(itemFactory.id, $scope.name, $scope.price)
        itemFactory.addItem(itemOperation);
        $scope.result = itemFactory.itemList;
    }
})