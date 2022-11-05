let num1=prompt("please Enter The first Number");
let num2=prompt("please Enter The Second Number");
let num3=prompt("please Enter The third Number");
let num4=prompt("please enter the 4th number");
let num5=prompt("pleasde enter the 5th number");
let maxNum;
if(num1>=num2&&num1>=num3&&num1>=num4&&num1>=num5){
    maxNum=num1;
}
else if(num2>=num1&&num2>=num3&&num2>=num4&&num2>=num5){
    maxNum=num2;
}
else if(num3>=num1&&num3>=num2&&num3>=num4&&num3>=num5){
    maxNum=num3;
}
else if(num4>=num1&&num4>=num2&&num4>=num3&&num4>=num5){
    maxNum=num4;
}
else if(num5>=num1&&num5>=num2&&num5>=num3&&num5>=num4){
    maxNum=num5;
}
alert("the maximmum number is :  "+maxNum);
