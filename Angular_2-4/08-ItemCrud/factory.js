function Item(id,name,price){
    this.id = id;
    this.name = name;
    this.price = price;
    this.isDelete = false;
    this.toggleDelete = function(){
        this.isDelete = !this.isDelete;
        console.log(this.isDelete);
    }
}

app.factory('itemFactory',function(){
    var itemObj = {
        id : 1,
        itemList : [],
        addItem : function(itemOperations){
            this.itemList.push(itemOperations)
            this.id ++;
            //console.log(this.itemList);
        },
        countDeleted : function(){
            return this.itemList.filter(function(itemOperations){
                return itemOperations.isDelete;
            }).length;
        },
        deleteItem : function(){
            this.itemList =  this.itemList.filter(function(itemOperation){
                return !itemOperation.isDelete;
            })
        },
        getList : function(){
            return this.itemList;
        }
    }
    return itemObj;
})