function pass(){

    let password1=document.getElementById("password");
    let password2=document.getElementById("confiermpassword");
    console.log(password1);
    console.log(password2);
    
    if(password1.value.length <=5){
        let v=document.getElementsByTagName("span")[0];
        v.innerHTML="Too short";
        v.style.color="red";

    }
    else if(password1.value!=password2.value&&password2.value!=0){
       let c=document.getElementsByTagName("span")[1];
       c.innerHTML="The Two Password don't match";
       c.style.color="red";
    }
    else if(password1.value==password2.value){

        document.getElementById("sub").style.display="block";
    }
}
