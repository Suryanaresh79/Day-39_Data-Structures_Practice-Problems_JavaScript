let initalNumber=1;
let finalNumber=100;
let a=parseInt(initalNumber)
let b=parseInt(finalNumber);
let i=0;
let integerI=parseInt(i);
for( integerI =a;integerI<=b;integerI++){


repeatedNumber(integerI)
}


function repeatedNumber(intSting){
    let unitplace=parseInt(intSting%10);
    let tenPlace=parseInt((intSting/10)%10);
    if (unitplace==tenPlace)
  {
      console.log("repeated Numbers Are "+intSting)
  }




}