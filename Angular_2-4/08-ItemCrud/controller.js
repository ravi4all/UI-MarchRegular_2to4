app.controller('itemCtrl', function($scope, itemFactory){
    $scope.add = function(){
        var itemOperation = new Item(itemFactory.id, $scope.name,
            $scope.price);
        itemFactory.addItem(itemOperation);
        $scope.result = itemFactory.getList();
    }
    $scope.countDeleted = function(){
        return itemFactory.countDeleted();
    }
    $scope.delete = function(){
        itemFactory.deleteItem();
        $scope.result = itemFactory.getList();
    }
});