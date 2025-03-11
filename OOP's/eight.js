class Account {
    min_Bal = 500;
    acc_Name;
    acc_Id;
    acc_Bal;
  
    constructor(id, name, bal) {
      this.acc_Id = id;
      this.acc_Name = name;
      this.acc_Bal = bal;
    }

    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount;
    }

    withdrawl(amount){
        this.acc_Bal=this.acc_Bal-amount;
    }

    get_Bal(){
        return this.acc_Bal;
    }
  }
  
  let a1 = new Account(101, "Rahul", 5000);
  console.log(a1);
  
  a1.deposit_Amount(1000);
  console.log(a1);

  a1.withdrawl(15);
  console.log(a1);

  console.log(a1.get_Bal());

  