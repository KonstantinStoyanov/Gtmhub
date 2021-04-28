function number(num1,num2){
    let counter=0;
    let newNumber;
    newNumber=num1%10+num2%10;
    while(newNumber>=9 || newNumber==0){
        if(newNumber>9){
            counter++
        }
        if(num1==0 && num2==0 ){
            return console.log(counter);
        }
        num1=Math.floor(num1/10);
        num2=Math.floor(num2/10);
        newNumber=num1%10+num2%10+1;
    }

console.log(counter);

  
}


number(9,11);
number(1,999);
number(1,101);
number(25,185)
number(990,110)
