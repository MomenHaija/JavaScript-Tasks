
function project(){

    let Subject=document.getElementById("subject").value;
    let Description=document.getElementById("description").value;
    let usertypes=document.getElementById("usertypes").value;
   
    window.sessionStorage.setItem("Subject",Subject);
    
    window.sessionStorage.setItem("project Description",Description);
    
    window.sessionStorage.setItem("usertypes",usertypes);
   
    var lang1 = document.getElementById("htmllang");
    var lang2 = document.getElementById("csslang");
    var lang3 = document.getElementById("jslang");
    var lang4 = document.getElementById("clang");
    var lang5 = document.getElementById("phplang");
    var lang6 = document.getElementById("Mysgl");
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
        var lg5 = document.getElementById("phplang").value;
        result =result+ lg5 + "   ";
    } 
    if (lang6.checked == true) {
        var lg6 = document.getElementById("Mysgl").value;
        result =result+ lg6 + " ";
    } 
    window.sessionStorage.setItem("Technology Used",result);
      
}

function out(){
document.getElementById("nmeobj").innerHTML+=window.sessionStorage.getItem("Subject");
document.getElementById("decrproj").innerHTML+=window.sessionStorage.getItem("project Description");
document.getElementById("Typesuser").innerHTML+=window.sessionStorage.getItem("usertypes");
document.getElementById("technologyUsed").innerHTML+=window.sessionStorage.getItem("Technology Used");

document.getElementsByClassName("cont")[0].style.visibility="visible";

}