
//exercise1
const obj={myAge:25,mothersAge:48};
const objnew={siblingAge:obj.myAge-6,...obj};
console.log("initial object:"+ "\n myAge: "+ obj.myAge + "\n mother's Age: "+ obj.mothersAge);
console.log("--------------------------------------------------------");
console.log("New object with sibling's age apeended:"+"\n sibling's age: "+objnew.siblingAge +"\n myAge: "+ objnew.myAge + "\nmother's Age: "+ objnew.mothersAge );
console.log("_________________________________________________________________");

//exercise2

const colors=['Red','Yellow','Green','Pink','Blue'];
console.log("Colors in array: ");
for (var i=0;i< colors.length;i++){
  console.log(colors[i]);
}
console.log("--------------------------------------------------------");
const newColors=[...colors,'Orange','Maroon'];
console.log("In new array, New colors added with existing colors in older array:");
for (var c=0;c<newColors.length;c++){
  console.log(newColors[c]);
}
console.log("_________________________________________________________________");


//exercise3

function TotalOfAll(...args){
  let total=0;
  for (let i of args){
    total=total+i
  }
  return total;
}

console.log("Total of 1,2,3,4,5,6,7,8,9: "+ TotalOfAll(1,2,3,4,5,6,7,8,9));

console.log("_________________________________________________________________");

//exercise4

function AverageOfAll(...args){
  let average=0;
  let lengthOfArgs=args.length;
  if(lengthOfArgs==0){
    return 0;
  }
  else{
    let totalOfNum=0
    
    for(let i of args){
      // console.log(i)
      totalOfNum=i+totalOfNum;
    }
    average=totalOfNum/args.length; //as var is hoisted, it will be available outside the for loop with value 9
    return average;
  }
}

console.log("Average of 1,2,3,4,5,6,7,8,9: "+ AverageOfAll(1,2,3,4,5,6,7,8,9));

console.log("Average of 0: "+ AverageOfAll());
console.log("_________________________________________________________________");
