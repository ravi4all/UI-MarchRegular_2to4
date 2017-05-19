/*
Service
It is also like factory but it does not return anything
It is like constructor function
It is lazy
*/

calcApp.service('myService', function(){
    this.obj = {
        'add':function(first_num, second_num){
            return parseInt(first_num) + parseInt(second_num);
        },
        'sub' : function(first_num, second_num){
            return parseInt(first_num) - parseInt(second_num);
        }
    }
})