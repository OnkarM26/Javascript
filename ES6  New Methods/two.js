let emp={
    eid:101,
    ename:"Rahul",
    esal:45000.45
};

// If we freeze our object we can't update it
Object.freeze(emp);
emp.ename="Rahul Gandhi";
console.log(emp);

/*
let enames=["Rahul","Sonia","Priyanka","Modi"]
index        0        1        2        3
Assignment 1:
    Iterate and Print employee first char -
    R
    S
    P
    M
    
Assignment 2:
    Collect all employees first character into an new array
        Ex.['R', 'S', 'P', 'M' ]
*/
    