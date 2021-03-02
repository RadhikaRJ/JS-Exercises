
//exercise1
const obj={myAge:25,mothersAge:48};
const objnew={siblingAge:obj.myAge-6,...obj};
console.log("initial object:"+ "\n myAge: "+ obj.myAge + "\n mother's Age: "+ obj.mothersAge);
console.log("--------------------------------------------------------");
console.log("New object with sibling's age apeended:"+"\n sibling's age: "+objnew.siblingAge +"\n myAge: "+ objnew.myAge + "\nmother's Age: "+ objnew.mothersAge );
console.log("_________________________________________________________________");

//exercise2

const colors=['Red','Yellow','Green','Pink','Blue'];
console.log("\n"+"Colors in array: ");
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

console.log("\n"+"Total of 1,2,3,4,5,6,7,8,9: "+ TotalOfAll(1,2,3,4,5,6,7,8,9));

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

console.log("\n"+"Average of 1,2,3,4,5,6,7,8,9: "+ AverageOfAll(1,2,3,4,5,6,7,8,9));

console.log("Average of 0: "+ AverageOfAll());
console.log("_________________________________________________________________");

//exercise5

const birthdayObj={name:"Radhika", age: 20}
function incrementAge(someObj){
   const newBirthdayObj={...someObj,age: someObj.age+1};
   return newBirthdayObj;
}

console.log("\n"+"items of birthday object: "+"\n name: "+birthdayObj.name+"\n age: "+birthdayObj.age
)

console.log("Incrementing the age using Pure function incrementAge(): ")

console.log(incrementAge(birthdayObj).age +" is the new age");
console.log("_________________________________________________________________");

//exercise6

const arr=[1,3,4,5];
console.log("\n"+"Existing array is having following values: "+arr+"\n Appending number 22 to the array");

function updateArr(a){
 const anew=[...a,22];
 return anew;
}

// const newArr=[...arr,22];
// console.log("After appending, new array: "+newArr);
console.log("After appending, new array: "+updateArr(arr));
console.log("_________________________________________________________________");