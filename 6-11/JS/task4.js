let sum=0;
for(let i=0;i<=100;i++){
    sum+=i;
    if(sum>100){
        document.write(sum +" at i: "+i );
        break;
    }
}