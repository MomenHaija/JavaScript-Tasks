

const y=document.getElementsByTagName("p");
document.getElementById("demo").innerHTML +=y[0].innerHTML+""+'My name is:Momen';
const c=document.querySelectorAll("p.me")[1];
const v=document.querySelector("p.me");
document.getElementById("demo").innerHTML+=v.innerHTML;

document.getElementById("demo").style.color="red";
document.getElementsByTagName("p")[0].style.backgroundColor="yellow";
document.querySelector("p").style.border="2px solid black";

document.getElementsByClassName("me")[0].setAttribute("style","color:red");
document.getElementsByTagName("img")[0].setAttribute("src","../../../../haija/HTML-CSS-task1/image/2640598.png");

document.getElementsByTagName("a")[0].href="https://www.w3schools.com/jsref/met_element_setattribute.asp";
function fun(){

    document.getElementsByClassName("but")[0].style.backgroundColor="red";
    document.getElementsByClassName("but")[0].style.width="200px";   
}
function thetime(){
   document.write(Date()); 
}
function  toUpper(){
   let r=document.getElementById("text");
   r.value=r.value.toUpperCase();
}

function changetext(){
    document.getElementsByClassName("memo")[0].innerHTML="Welcome"
}
function greateborder(){
    document.getElementById("createborder").style.border="10px solid red";
}
function removerborder(){
    document.getElementById("createborder").style.border="3px solid black";
}


let b=document.querySelectorAll("p");
console.log(b);

console.log(document.form);