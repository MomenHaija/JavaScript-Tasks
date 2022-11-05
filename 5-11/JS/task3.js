let num1=prompt("please Enter The first Number");
let num2=prompt("please Enter The Second Number");
let num3=prompt("please Enter The third Number");
if(num1>num2&&num1>num3){

    if(num2>num3){
        alert(num1+" "+num2+" "+num3);
    }
    else{
        alert(num1+" "+num3+" "+num2);
    }
}
else if(num2>num1&&num2>num3){

    if(num3>num1){
        alert(num2+" "+num3+" "+num1);
    }
    else{
        alert(num2+" "+num1+" "+num3);
    }
}
else if(num3>num1&&num3>num2){
    if(num2>num1){

        alert(num3+" "+num2+" "+num1);
    }
    else{
        alert(num3+" "+num1+" "+num2)
    }
    
}
