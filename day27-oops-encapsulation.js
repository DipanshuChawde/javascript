
//program1
class Add{
    addition(x,y){
        console.log(x+y)
    }
    addition(x,y,z){
        console.log(x+y+z)
    }
    addition(x,y,z,a){
        console.log(x+y+z+a)
    }
}

let ad=new Add()
ad.addition(2,3)  //Nan
ad.addition(2,3,4)  //Nan
ad.addition(2,3,4,5)  //14

//javaScript does not support encapsulation like java or other traditional oop programming language, 
//you can achieve encapsulation through various techniques. Here are some ways to implement encapsulation in JavaScript: 

//program2

class Add2{
    addition(x,y,z,a){
        if(x != undefined && y != undefined && z!=undefined && a!=undefined)
        console.log(x+y+z+a)
                
        else if(x != undefined && y != undefined && z!=undefined)
        console.log(x+y+z)
   
        else if(x != undefined && y != undefined)
        console.log(x+y)
    }        
}

let ad2=new Add2()
ad2.addition(2,3)
ad2.addition(2,3,4)
ad2.addition(2,3,4,5)

//program3

class WorldBank{
    save(){
        console.log('i m save in world bank')
    }
    loan(){
        console.log('i m loan in world bank')
    }
}

class SBI extends WorldBank{
    save(){
        console.log('i m save in SBI')
        super.save()
    }
    loan(){
        console.log('i m loan in SBI')
        super.loan()
    }
}

let sbi=new SBI()
sbi.save()
sbi.loan()

// encapsulation or privacy --->
// lexical scope
// closures