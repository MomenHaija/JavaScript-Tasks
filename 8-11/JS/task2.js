
function changeimage(){
   
    let selectvalue=document.getElementById("ddl").value;
    if(selectvalue=="amirca"){
       document.getElementById("image").src="../image/download (1).png";
    }
    else if(selectvalue=="australia"){
        document.getElementById("image").src="../image/download (2).png";   
    }
    else if(selectvalue=="united-kingdom"){
        document.getElementById("image").src="../image/download (3).png";   
    }
    else if(selectvalue=="Turkey"){
        document.getElementById("image").src="../image/download (4).png";   
    }
    
}

