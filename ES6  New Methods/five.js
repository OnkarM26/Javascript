let eids=[101,102,103,104];
// Create new array based on existing aray
let uids=[];

for(let eid of eids){
    uids.push(eid);
}

console.log(uids);
uids[0]='100';
console.log(uids); // [ '100', 102, 103, 104 ]
console.log(eids); // [ 101, 102, 103, 104 ]