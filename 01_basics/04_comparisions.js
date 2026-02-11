//<<<<<<<<comparisions>>>>>>>>>>>
//basic comparisions
console.log(2>1);
console.log(2>+1);
console.log(2<1);
console.log(2==1);
console.log(2>=1);
console.log(2!=1);

//######## AVOID COMPARING TWO DIFFERENT DATA TYPES #############


console.log("2" > 1) // output will be true because js automatically conver string "2" to number 
// but in typescript it would be false or invalid becasue type script does not automatically converts 

console.log(null > 0); // ans false 
console.log(null == 0); // ans false ####because in == js does not automatically converts data type
console.log(null >= 0);// ans true bcoz it converted null to 0 


console.log( undefined == 0); // false 
console.log( undefined > 0); // false 
console.log( undefined >= 0); // false 


//##### === ( strict check )
// === checks both value and data type 
// == checks only value 

console.log("2" === 2 ); // ans will be false bcoz data type different 



