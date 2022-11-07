const cars=["BMW","VOLVO","KIA"];
document.write(cars[1]+"<br>");
cars[2]="HYUNDAI";
document.write(typeof cars+"<br>");
document.write(cars.length+"<br>");
document.write(cars.sort()+"<br>");
document.write(cars+"<br>");


let text="<ul>";
for(let i=0;i<cars.length;i++){
    text+="<li>"+cars[i]+"</li>"
}
text+="</ul>";
const fruits= new Array("Banana", "Orange", "Apple");
fruits.push("Lemon");
for(let p=0;p<fruits.length;p++){
    document.write(fruits[p]+"  ");
}
document.write("<br>");
const G=[40];
document.write(G.length+"<br>");
const B=new Array(40);
document.write(B.length+"<br>");

let person={
    firstName:"Momen",
    LastName:"Abu AL-Haija",
    age:23,
    id:20

};
document.write(person["age"]+"<br>");
