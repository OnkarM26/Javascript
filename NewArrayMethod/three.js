let enames=["rg","vg","pg","mN"];
   
let new_enames=[];
// create new array with upper case names
new_enames=enames.map((ename)=>{
    return ename.toUpperCase();
})

console.log(enames);
console.log(new_enames);
