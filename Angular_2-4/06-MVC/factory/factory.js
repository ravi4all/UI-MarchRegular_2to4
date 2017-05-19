/*
Factory
It always return something - object
Factory is eager
*/

calcApp.factory('myFactory', function(){
    var obj = {
        'add':function(first_num, second_num){
            return parseInt(first_num) + parseInt(second_num);
        },
        'sub' : function(first_num, second_num){
            return parseInt(first_num) - parseInt(second_num);
        }
    }
    return obj;
})
