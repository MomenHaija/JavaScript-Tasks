
function meinfo(){

    let Name=document.getElementById("name").value;
    let Age=document.getElementById("Age").value;
    let Description=document.getElementById("Description").value;
    let major=document.getElementById("major").value;
   
    window.localStorage.setItem("name",Name);
    var mename=window.localStorage.getItem("name");

    window.localStorage.setItem("Age",Age);
    var meAge=window.localStorage.getItem("Age");

    window.localStorage.setItem("Description",Description);
    var meDescription=window.localStorage.getItem("Description");

    window.localStorage.setItem("major",major);
    var memajor=window.localStorage.getItem("major");




    var lang1 = document.getElementById("htmllang");
    var lang2 = document.getElementById("csslang");
    var lang3 = document.getElementById("jslang");
    var lang4 = document.getElementById("clang");
    var lang5 = document.getElementById("phylang");
    var lang6 = document.getElementById("phplang");
    var result = " ";
    if (lang1.checked == true) {
        var lg1 = document.getElementById("htmllang").value;
        result = lg1 + "   ";
    }
    if (lang2.checked == true) {
        var lg2 = document.getElementById("csslang").value;
        result =result+ lg2 + "   ";
    }

    if (lang3.checked == true) {
        var lg3 = document.getElementById("jslang").value;
        result =result+ lg3 + "   ";
    }
    if (lang4.checked == true) {
        var lg4 = document.getElementById("clang").value;
        result = lg4 + "   ";
    }
    if (lang5.checked == true) {
        var lg5 = document.getElementById("phylang").value;
        result =result+ lg5 + "   ";
    }

    if (lang6.checked == true) {
        var lg6 = document.getElementById("phplang").value;
        result =result+ lg6 + "   ";
    } 
    window.localStorage.setItem("result",result);
    var meresult=window.localStorage.getItem("result");


    var ele = document.getElementsByName('gender');  
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            var gender=ele[i].value;
        }
    }
    window.localStorage.setItem("gender",gender);
    var megender=window.localStorage.getItem("gender");
    
      
}

function out(){
document.getElementById("oname").innerHTML+=window.localStorage.getItem("name");
document.getElementById("ogender").innerHTML+=window.localStorage.getItem("gender");
document.getElementById("oage").innerHTML+=window.localStorage.getItem("Age");
document.getElementById("odes").innerHTML+=window.localStorage.getItem("Description");
document.getElementById("omajor").innerHTML+=window.localStorage.getItem("major");
document.getElementById("olang").innerHTML+=window.localStorage.getItem("result");
document.getElementsByClassName("cont")[0].style.visibility="visible";
}




