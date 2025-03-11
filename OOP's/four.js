class Account{
    // Class contains properties and methods
    // Properties
    min_Bal=100;
    acc_bal=0;

    // Methods
    open_Acc(){
        console.log("Account Open")
    }

    deposit_Amount(amount){
        this.acc_bal=this.acc_bal+amount;
    }

    get_Bal(){
        return this.acc_bal-this.min_Bal;
    }

    withdrawl(amount){
        return this.acc_bal=this.acc_bal-amount; 
        
    }

    close_Acc(){
        console.log("You can't close bal is low")
    }
}

// console.log(Account);

let a1=new Account();
a1.deposit_Amount(5000);
a1.withdrawl(1800);
a1.get_Bal();

let a2=new Account();
a2.deposit_Amount(15000);
a2.withdrawl(1500);
a2.get_Bal();

console.log(a1);
console.log(a1.get_Bal());

console.log(a2);
console.log(a2.get_Bal());


