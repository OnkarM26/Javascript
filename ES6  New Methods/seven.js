// Merging two objects/Arrays
/*
    What is Spread Object?
        (1) Create new Arrays/Objects
        (2) Merge Two Arrays/Objects
        (3) Extend Arrays/Objects
*/
let emp={eids:101,
         ename:"Rahul",
         email:"hush@gmail.com"
}

let details={
        email:"huhuhuh@gmail.com", // override b'coz objects not allow duplicates
        esal:45000
}

let emp_details={...emp,...details};
console.log(emp_details);
// { eids: 101, ename: 'Rahul', email: 'huhuhuh@gmail.com', esal: 45000 }

let a=[10,20,30];
let b=[30,40,50];

let c=[...a,...b];
console.log(c);
// [ 10, 20, 30, 30, 40, 50 ]