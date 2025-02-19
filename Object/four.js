let employees=[ {eid:101,ename:"RG"},
                {eid:102,ename:"PG"},
                {eid:103,ename:"SG"}
];

console.log(employees);
console.log(employees[0]);
console.log(employees[0].ename);
console.log(employees[1].ename);
console.log(employees[2].ename);

for(let emp of employees){
    console.log(emp.eid);
}

