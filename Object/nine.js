let ids=[101,101,103,103,104,105,105,105,108,109];
let user={
    uid:101,  // First occurrence of 'uid'
    uname:"RG",
    uid:102  // Second occurrence of 'uid' (overwrites the first one)
}

console.log(ids); // duplicates are allowed [101, 101, 103, 103, 104, 105, 105, 105, 108, 109]
console.log(user);  // duplicate keys are not allowed { uid: 102, uname: 'RG' }
console.log(user.uid); // 102

/*
    Note:
        - Objects in JavaScript do not allow duplicate keys.
        - If you define the same key multiple times, the last assigned value overwrites previous ones.
*/