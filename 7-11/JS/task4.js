

let obje = {
    firstName:"Othman", 
    lastName:"Khasawneh",
    age: 31,
    salary: 550
};
employeesInfo(obje);

function employeesInfo(obj){

    document.write("The first name is: "+obj.firstName+"<br>");
    document.write("The age is: "+obj.age+"<br>");
    document.write("The salary is:"+obj.salary+"<br>");
}