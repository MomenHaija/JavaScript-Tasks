
//typeof operator 
let testNumber=5,testStr="Hello World",mathNum="3.14";    
document.write(typeof testNumber+"<br>");
document.write(typeof testStr+"<br>");


//Converting Strings to Numbers
document.write(Number(testStr)+"<br>");    // non numeric string converts to NaN (Not a Number).
document.write(Number(mathNum)+"<br>");   //numeric string converts to a number 
document.write(Number(" ")+"<br>");      //An empty string converts to 0


//parseFloat()	Parses a string and returns a floating point number
//parseInt()	Parses a string and returns an integer
document.write(parseInt(mathNum)+"<br>");


// The Unary + Operator: The unary + operator can be used to convert a variable to a number:
let numTest="5";
let secondNum =+ numTest;
document.write(typeof numTest+"<br>");
document.write(typeof secondNum+"<br>");


//Converting Numbers to Strings
document.write(String(100+50)+"<br>");
document.write((123).toString()+"<br>");


//Converting Booleans to Strings
document.write(String(false)+"<br>");
document.write(true.toString()+"<br>");


//Converting Dates to Numbers
var day=Number(new Date().getDay());
switch(day){

    case 0:
        document.write("Sunday"+"<br>");
    break
    case 1:
        document.write("Monday"+"<br>");
    break
    case 2:
        document.write("Tuesday"+"<br>");
    break
    case 3:
        document.write("Wednesday"+"<br>");
    break
    case 4:
        document.write("Thursday"+"<br>");
    break
    case 5:
        document.write("friday"+"<br>");
    break        
    default:
        document.write("Saturday"+"<br>");
    
}

for(let i=0;i< 10;i++){
    document.write("yes"+"<br>");
}

let j=0;
while(j<10){
    document.write("Hello"+"<br>");
    j++;
}


let r=0;
do{
    document.write("No"+"<br>");
    r++;

}while(r<10)

