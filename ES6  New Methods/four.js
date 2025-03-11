// Spread
let eids=[101,102,103,104];
let vids=eids;
vids[0]="Rahul"; // alias name or point to same object
console.log(eids); // ["Rahul",102,103,104]
console.log(vids); // ["Rahul",102,103,104]