let nums=[1,2,3,4,5,6,7,8,9];
let even_nums=[];

// Using for of method
for(let num of nums){
    if(num%2==0){
        even_nums.push(num);
    }
}
console.log(even_nums);
