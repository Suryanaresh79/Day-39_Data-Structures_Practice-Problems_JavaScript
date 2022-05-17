let numberArray=new Array();
for(i=0;i<10;i++){
    let number= Math.floor(Math.random()*1000);
    numberArray.push(number);
}
sortedArray=numberArray.slice().sort();
console.log(sortedArray);

console.log("Secound Smallest is"+sortedArray.slice(1,2));
console.log("Secound Largest is "+sortedArray.slice(8,9));