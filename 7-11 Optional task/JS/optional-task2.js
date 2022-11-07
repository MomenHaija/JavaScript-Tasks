function canIGetADrivingLicense(age){
    if(age>=20){document.write("yes you can");}
    else{
        document.write("please come back after X years to get one");
    }
}
let age=prompt("please Enter Your age");
canIGetADrivingLicense(+age);
