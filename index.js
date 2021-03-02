
//exercise1
const obj={myAge:25,mothersAge:48};
const objnew={siblingAge:obj.myAge-6,...obj};
console.log("initial object:"+ "\n myAge: "+ obj.myAge + "\n mother's Age: "+ obj.mothersAge);
console.log("--------------------------------------------------------");
console.log("New object with sibling's age apeended:"+"\n sibling's age: "+objnew.siblingAge +"\n myAge: "+ objnew.myAge + "\nmother's Age: "+ objnew.mothersAge );
console.log("_________________________________________________________________");

//exercise2

