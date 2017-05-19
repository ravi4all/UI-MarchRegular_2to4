function Item(id,name,price){
    this.id = id;
    this.name = name;
    this.price = price;
}

app.factory('itemFactory',function(){
    var itemObj = {
        id : 1,
        itemList : [],
        addItem : function(itemOperations){
            this.itemList.push(itemOperations)
            this.id ++;
            console.log(this.itemList);
        }
    }
    return itemObj;
})