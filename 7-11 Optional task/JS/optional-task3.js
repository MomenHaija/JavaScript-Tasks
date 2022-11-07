function  sameLength(str1,str2){
    if(str1.length==str2.length){return true;}
    else{
        return false;
    }
}
let str1="tree";
let str2="clue";
let str3="car";
document.write(sameLength(str1,str2)+"<br>");
document.write(sameLength(str1,str3)+"<br>");

