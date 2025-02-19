let user={  uid:101,
            uname:"Rahul",
            loc:"Waynad",
            email:"hdhd@gmail.com",
            age:"52",
            status:"single"
};

for(let key in user){
    console.log(key); // We're getting all keys

    console.log(user[key]); // We're getting values here

    console.log("----------")
}