function longerString(str1,str2,str3,str4){
    
    let shortlength=str1.length;
    let shortvalue=str1;
    if(str2.length>shortlength){
        shortlength=str2.length;
        shortvalue=str2;

    }
    if(str3.length>shortlength){
        shortlength=str3.length;
        shortvalue=str3;

    }
    if(str4.length>shortlength){
        shortlength=str4.length;
        shortvalue=str4;
    }
    return shortvalue;
}
document.write(longerString("air","schoo","car","github"));


