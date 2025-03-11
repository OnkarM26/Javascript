let enames=["rg","vg","pg","mN"];
   
let new_enames=[];

// Iterate Using normal for of method
for(let ename of enames){
    new_enames.push(ename.toUpperCase());
}
console.log(new_enames);
