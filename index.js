
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

//exercise7

const lessThan10=(n)=> {if(n<10) return n ;}

var ArrayOfNumbers=[1,2,3,21,31,41];

console.log("\n"+"numbers in Array: "+ArrayOfNumbers);
var newArrayLessThan10=ArrayOfNumbers.filter(lessThan10);
console.log("Numbers less than 10 identified using Array.filter():  "+newArrayLessThan10);

console.log("_________________________________________________________________");

//exercise8
 
 var someNumbersInArr=[1,2,3,4,5,6,7,8,9];

console.log("\n"+"numbers in the array: "+someNumbersInArr);

 function returnObjectForEachItem(someArr){

  return someArr.map((item)=>{return {"obj":item}})
 }

var newObjectOfNumbers=returnObjectForEachItem(someNumbersInArr);

console.log("\n"+" for each of the numbers an obect is returned by passing to function returnObjectForEachItem(someArr)"); 
console.log(newObjectOfNumbers);

console.log("_________________________________________________________________");

//exercise9

const calcSum=(arrOfNum)=>{ return sum=arrOfNum.reduce((current,totalofvalues)=> current+totalofvalues,0 )}

console.log("\n"+"array of nums: "+someNumbersInArr);
console.log("Calculating sum using reduce: "+ calcSum(someNumbersInArr));
console.log("_________________________________________________________________");

//exercise10.a

var anArrayOfNumbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]

console.log("\n"+"array of integers: "+anArrayOfNumbers);


console.log("--------------------------------------------");
const findOddNumbers=(n)=>{if(n%2!=0) return n}

var oddNumbers=anArrayOfNumbers.filter(findOddNumbers);

let sumOfOddNumbers=oddNumbers.reduce((current, sum)=>{ return current+sum})
console.log("Odd Numbers identified using filter: "+oddNumbers);

console.log("Sum of Odd Numbers calculated using reduce: "+sumOfOddNumbers )

console.log("--------------------------------------------");
