var empObj = {
    empList : [],
    id : 0,
    addEmp : function(name, dept){
        this.id++;
        var obj = new Emp(this.id, name, dept);
        this.empList.push(obj);
        console.log(this.empList);
    },
    toggleEmp : function(id){
        var empData = empObj.empList.filter(function(empObj){
            return empObj.id == id;
        });
        empData[0].selected = !empData[0].selected;
        console.log(empData);
    },
    deleteEmp : function(){
        this.empList = this.empList.filter(function(empObj){
            return empObj.selected == false;
        });
    },
    empCounter : function(){
        return this.empList.filter(function(empObj){
            return empObj.selected == false;
        }).length;
    },
    selectedEmp : function(){
        return this.empList.filter(function(empObj){
            return empObj.selected == true;
        }).length;
    },
    searchEmp : function(empId){
        this.empList = this.empList.filter(function(empObj){
            return empObj.id == empId;
        });
    }
}