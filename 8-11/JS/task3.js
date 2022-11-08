function changefont(){
    
    let r=document.getElementById("fontstyle").value;
    if(r=="Arial"){
       document.getElementsByTagName("textarea")[0].style.fontFamily="Arial, Helvetica, sans-serif";

    }
    else if(r=="Verdana"){

        document.getElementsByTagName("textarea")[0].style.fontFamily="Verdana, Geneva, Tahoma, sans-serif";

    }
    else if(r=="Tahoma"){
        document.getElementsByTagName("textarea")[0].style.fontFamily="Tahoma";

    }
    else if(r=="Georgia"){
        document.getElementsByTagName("textarea")[0].style.fontFamily="Georgia";
    }
    
}

function fontsize(){
    let r=document.getElementById("fontsize").value;
    if(r==12){
        document.getElementsByTagName("textarea")[0].style.fontSize="12px";
    }
    else if(r==14){
        document.getElementsByTagName("textarea")[0].style.fontSize="14px";
    }
    else if(r==16){
        document.getElementsByTagName("textarea")[0].style.fontSize="16px";
    }
    else if(r==18){
        document.getElementsByTagName("textarea")[0].style.fontSize="18px";
    }
    else if(r==20){
        document.getElementsByTagName("textarea")[0].style.fontSize="20px";
    }
    else if(r==24){
        document.getElementsByTagName("textarea")[0].style.fontSize="24px";
    }
    
}

function fontStyle1(){
    let j=document.getElementById("italic1").checked;
    console.log(j);
    if(j){
        document.getElementsByTagName("textarea")[0].style.fontStyle="italic";
    }
    else{
        document.getElementsByTagName("textarea")[0].style.fontStyle="normal";   
    }
} 

function fontWeight1(){
    let jj=document.getElementById("Bold1").checked;
    if(jj){
        document.getElementsByTagName("textarea")[0].style.fontWeight="bold";
    }
    
    else{
        document.getElementsByTagName("textarea")[0].style.fontWeight="normal";
    }
}


function textDecoration(){
    let jj1=document.getElementById("underline1").checked;
    if(jj1){
        document.getElementsByTagName("textarea")[0].style.textDecoration="underline";
    }
    else{
        document.getElementsByTagName("textarea")[0].style.textDecoration="none";

    }

}


