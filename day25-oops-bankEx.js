class Bank{
    constructor(fullnm,bal){
        this.fullName=fullnm
        this.balance=bal
        this.transction=[]
    }
    withdraw(amt){
        if(this.balance>amt){
        this.balance=this.balance-amt
        this.transction.push(amt)
        }
        else{
            console.log('insufficient fund')
        }
    }

    deposit(amt){
        this.balance=this.balance+amt
        this.transction.push(amt)
    }
    lastFiveTransac(){
        console.log(this.transction.slice(-5))
    }


}

transac=new Bank('dipanshu',5000000)
transac.withdraw(100)
console.log(transac.balance)
transac.deposit(100)
transac.deposit(200)
transac.deposit(300)
transac.deposit(400)
transac.deposit(500)
transac.withdraw(600)
transac.withdraw(700)
transac.withdraw(800)
transac.withdraw(900)
transac.withdraw(100)

console.log(transac.transction)

console.log(transac.lastFiveTransac())