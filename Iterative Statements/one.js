// For Loop
/*
for(let i=1;i<=5;i++){
    console.log(i);
}
    */

// First ten even numbers
let j=0, count=0;
while(j>=0){
    if(j%2==0){
        console.log(j);
        count++;
    }
    if(count===10)
        break;
    j++;
}