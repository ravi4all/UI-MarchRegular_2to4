var empObj = {
    empList : [],
    id : 0,
    addEmp : function(name, dept){
        this.id++;
        var obj = new Emp(this.id, name, dept);
        this.empList.push(obj);
        console.log(this.empList);
    }
}