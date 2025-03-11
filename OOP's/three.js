class Account{
    // Class contains properties and methods
    // Properties
    min_Bal=100;
    branch_Name="MRT";
    acc_bal=0;

    // Methods
    open_Acc(){
        console.log("Account Open")
    }

    deposit_Amount(){
        console.log("Deposit certain Amount")
    }

    get_Bal(){
        console.log("Balance Low")
    }

    withdrawl(){
        console.log("Withdraw Amount");
        
    }

    close_Acc(){
        console.log("You can't close bal is low")
    }
}

console.log(Account);

let a1=new Account();
a1.open_Acc();
a1.deposit_Amount();
a1.get_Bal();
a1.withdrawl();
a1.close_Acc();