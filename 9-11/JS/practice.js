// setItem()

    window.localStorage.fontWeight="bold";
    window.localStorage["fontSize"]="24px";

// getItem()



// removeItem
window.localStorage.removeItem("fontWeight");



console.log(window.localStorage.key(0));



clickCounter();

function clickCounter() {
  if (localStorage.clickcount) {
    console.log(localStorage.clickcount);
    localStorage.clickcount = +localStorage.clickcount+1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("demo").innerHTML = localStorage.clickcount;
}


function changeColor1(){
    let v=document.getElementsByTagName("button")[1].value;
    window.localStorage.setItem("color",v);
    let h=window.localStorage.getItem("color");
    console.log(h);
    document.body.style.backgroundColor=h;
  
    
    
}
function changeColor2()
{
    let u=document.getElementsByTagName("button")[2].value;
    console.log(u);
    window.localStorage.setItem("color",u);
    let h=window.localStorage.getItem("color");
    console.log(h);
    document.body.style.backgroundColor=h;
}
function changeColor3()
{
        
    let y=document.getElementsByTagName("button")[3].value;
    window.localStorage.setItem("color",y);
    let h=window.localStorage.getItem("color");
    console.log(h);
    document.body.style.backgroundColor=h;

    
    // document.body.style.backgroundColor=window.localStorage.getItem("color");
}
function changeColor4()
{
        
    let g=document.getElementsByTagName("button")[4].value;
    window.localStorage.setItem("color",g);
    let h=window.localStorage.getItem("color");
    console.log(h);
    document.body.style.backgroundColor=h;
    document.body.style.backgroundColor=window.localStorage.getItem("color");
}

document.body.style.backgroundColor=window.localStorage.getItem("color");


function pesonInfo(){

    let pername=document.getElementsByTagName("input")[0].value;
    let perpas=document.getElementsByTagName("input")[1].value;
    console.log(pername);
    console.log(perpas);
    window.sessionStorage.setItem("name",pername);
    document.getElementById("hellouser").innerHTML="Welcome "+window.sessionStorage.getItem("name")+"!";
}


