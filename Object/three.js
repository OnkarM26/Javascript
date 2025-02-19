let emp={
    eid:101,
    ename:"Rahul",
    esal:45000.45
};

// Update and delete
emp.sal=55000.55;
emp.email="Rahul@gmail.com";
console.log(emp);

delete emp.sal;
console.log(emp);