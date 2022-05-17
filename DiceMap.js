let ones="Ones";
let twos="Twos";
let threes="Threes"
let fours="Fours"
let fives="Fives"
let sixs="Sixs"
let diceMap=new Map();
diceMap.set(ones,0);
one=0;
two=0;
three=0
four=0
five=0
six=0

 while ((one<10)&&(two<10)&&(three<10)&&(four<10) &&(five<10)&&(six<10)){// || (diceMap.get(twos)<10)   || (diceMap.get(threes)<10) || (diceMap.get(fours)<10) || (diceMap.get(fives)<10) || (diceMap.get(sixs)<10)){
    let diceNumber=Math.floor(Math.random()*6)+1;
   if(diceNumber==1){
        one++;
        diceMap.set(ones,one);
   }
   else if(diceNumber==2){
       two++;
       diceMap.set(twos,two)
   }
   else if(diceNumber==3){
       three++;
       diceMap.set(threes,three)
   }
   else if(diceNumber==4){
       four++;
       diceMap.set(fours,four)
   }
   else if(diceNumber==5){
       five++;
       diceMap.set(fives,five)
   }
   else if(diceNumber==6)
   {
       six++;
        diceMap.set(sixs,six)    
       }
}

    console.log("ones="+diceMap.get(ones))
    console.log("twos="+diceMap.get(twos))
    console.log("three="+diceMap.get(threes))
    console.log("fours="+diceMap.get(fours))
    console.log("fives="+diceMap.get(fives))
    console.log("six="+diceMap.get(sixs))

    console.log(diceMap.forEach(ones=>n))