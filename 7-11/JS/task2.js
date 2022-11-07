function  largestNumber(a,b){

    if(a>b){return a;}
    else{return b;}
}
let a=prompt("please enter the first number"+"<br>");
let b=prompt("please enter the second number"+"<br>");
let large= largestNumber(+a,+b);
document.write(" the two numbers are: " + a +" and " +b+" and the largest number is "+large );
