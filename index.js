
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
for (let color of colors){
  console.log(color);
}
console.log("--------------------------------------------------------");
const newColors=[...colors,'Orange','Maroon'];
console.log("In new array, New colors added with existing colors in older array:");
for (let c of newColors){
  console.log(c);
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

const ArrayOfNumbers=[1,2,3,21,31,41];

console.log("\n"+"numbers in Array: "+ArrayOfNumbers);
const newArrayLessThan10=ArrayOfNumbers.filter(lessThan10);
console.log("Numbers less than 10 identified using Array.filter():  "+newArrayLessThan10);

console.log("_________________________________________________________________");

//exercise8
 
 const someNumbersInArr=[1,2,3,4,5,6,7,8,9];

console.log("\n"+"numbers in the array: "+someNumbersInArr);

 function returnObjectForEachItem(someArr){

  return someArr.map((item)=>{return {"obj":item}})
 }

const newObjectOfNumbers=returnObjectForEachItem(someNumbersInArr);

console.log("\n"+" for each of the numbers an obect is returned by passing to function returnObjectForEachItem(someArr)"); 
console.log(newObjectOfNumbers);

console.log("_________________________________________________________________");

//exercise9

const calcSum=(arrOfNum)=>{ return sum=arrOfNum.reduce((current,totalofvalues)=> current+totalofvalues,0 )}

console.log("\n"+"array of nums: "+someNumbersInArr);
console.log("Calculating sum using reduce: "+ calcSum(someNumbersInArr));
console.log("_________________________________________________________________");

//exercise10

const anArrayOfNumbers=[1,20,3,4,50,6,7,80,9,10,11,12,13,14]

console.log("\n"+"array of integers: "+anArrayOfNumbers);

//exercise10 A
console.log("--------------------------------------------");
const findOddNumbers=(n)=>{if(n%2!=0) return n}

let oddNumbers=anArrayOfNumbers.filter(findOddNumbers);

let sumOfOddNumbers=oddNumbers.reduce((current, sum)=>{ return current+sum})
console.log("Odd Numbers identified using filter: "+oddNumbers);

console.log("Sum of Odd Numbers calculated using reduce: "+sumOfOddNumbers )

console.log("--------------------------------------------");
//exercise 10 B----Discuss with Team Scope---using reduce
let total=0
let oddIndiceNumbers= anArrayOfNumbers.map((item,index)=>{
  
  if(index%2!=0){
    total=total+item;
    return item
  }
});

let sumOfOddIndiceNumbers= anArrayOfNumbers.reduce((current,oddTotal, index)=>{
  if(index%2!=0)
  {
   return current+oddTotal
  }
})

console.log("Numbers at odd indices: "+oddIndiceNumbers);

console.log("Sum of numbers at odd Indices: "+total);
console.log("--------------------------------------------");
//exercise 10 C

const divBy10=(num)=>{
  if(num%10==0){
    return num;
  }
}

let numsDivBy10=anArrayOfNumbers.filter(divBy10);
console.log("The numbers divisible by 10 are: "+numsDivBy10);
console.log("--------------------------------------------");

//exercise 10 D

let incdecnum=anArrayOfNumbers.map((item)=>{
  if(item%2==0){
    return item-1;
  }
  else return item+1;
})

console.log("The array is : "+ anArrayOfNumbers);
console.log("The array of numbers where odd numbers are incremented by 1 and even are decremented by 1: "+incdecnum);

console.log("--------------------------------------------");

//exrcise 10 E 

const someNumbers=[1,2,3,4]

let oddnum=(a)=>{if(a%2!=0)return a}
let evenNum=(a)=>{if(a%2==0)return a}

let oddEvenSeparateSum=(numbers)=>{
  let alloddnumSum=numbers.filter(oddnum).reduce((currentitem,sum)=>{ return currentitem+sum});;
  // console.log(alloddnumSum)
  let allevenNumSum=numbers.filter(evenNum).reduce((currentitem,sum)=> {return currentitem+sum});

  return [{oddSum:alloddnumSum, evenSum:allevenNumSum}];
}


console.log("\n"+"Return an object with sum of all odd and even numbers separately"+"\n"+"the numbers are: "+someNumbers);
console.log(oddEvenSeparateSum(someNumbers));
console.log("--------------------------------------------");

//exercise11 A















console.log("--------------------------------------------");
//exercise11 B

const arrofStrings=["apple","orange", "mango", "papaya","lmn","jkl"];

const hasVowel=(a)=>{
  if(a.includes('a')||a.includes('e')||a.includes('i')||a.includes('o')||a.includes('u')){
      
      return true;
  }}
const findWordswithVowel=(ar)=>{
 
   let vowelResult=ar.filter(hasVowel);

  return vowelResult;
}

console.log("Strings having vowel in them are:");
 console.log(findWordswithVowel(arrofStrings));
 console.log("--------------------------------------------");

 //exercise 11 C

 const returnLengthObject=(a)=>{
   let result1= a.map((item)=>{
     const container={};
      container[item]=item.length; //setting item as key of the object and its length as value
    
     return container;
   })
   return result1;
 }
console.log("Return an array of objects with key as item and value as number of characters in the string:\n");
console.log(returnLengthObject(arrofStrings));
 console.log("--------------------------------------------");

 //exercise 12
 const HelloName=(name)=>{
   return function somefunction(appendingtext){console.log(`Welcome ${name} to ${appendingtext}`)}
 }
 console.log("create a function which takes your name and returns a function which would add your name to anything that function says  ( CURRYING)\n ");
 console.log(HelloName("Radhika")("Neogcamp"));
 console.log("--------------------------------------------");
 //exercise 13
 const logNamewithText=(name)=>{return name};
 const loguserID=(id)=>{return id};

const letsPrint=(n,i)=>{
  console.log(logNamewithText(n)+" has an amazing user id: "+loguserID(i));
}
letsPrint("Radhika","007");
console.log("--------------------------------------------");
//exercise 14
var somestrings = ["hello", "Matt", "Mastodon", "Cat", "Dog"];
const containsAt=(s)=>{
  return s.filter(hasAt);
}

const hasAt=(a)=>{if(a.includes("at"))return true;}
console.log("Strings that include at are: \n")
console.log(containsAt(somestrings));
console.log("--------------------------------------------");
//exercise 15
const inc=(n)=>{return n+1};
const sq=(n)=>{return n*n};
const incrementThenSquare=(n)=>{return sq(inc(n));}
const dec=(n)=>{return n-1};

function takeAnyNumOfFuncs(...args){
  return  function functExecutionOrder(n){
    let nresult=args.map(
      (item)=>{return(item(n))});
    return nresult;
  }

  }
   
console.log(takeAnyNumOfFuncs(incrementThenSquare,inc,sq,dec)(2));
   
console.log("--------------------------------------------");
//exercise 16

const strLength=(name,someFunction)=>{someFunction(name)};

const greet=(n)=>console.log(`${n} have a great day!`);

strLength("Radhika",greet);
console.log("--------------------------------------------");
//exercise 17

const willThanosKillMe=(n,s,f)=>{
  if(n.length%2==0){
    s();
  }
  else f();
}

const sucessCb=()=>{return console.log(`Yay! I am alive!`);}
const failCb=()=> {return console.log(`Give my bose speakers and headphones to my sister`);}

console.log(willThanosKillMe("Radhika",sucessCb,failCb));

console.log("--------------------------------------------");
//exercise 18

const printAfterDelay=(msg,delay)=>{
  setTimeout(()=>console.log(msg),delay)
}

//console.log("Printing after delay of 5 secs");
//printAfterDelay("This is printed after 5 sec delay, did you notice how the dashed line got printed first?",5000);
console.log("--------------------------------------------");

//exercise19

const printAfterEveryXsec=(msg,x)=>{
  setInterval(()=>console.log(msg),x);
}
//printAfterEveryXsec("This is printed after every x interval",30000);
console.log("--------------------------------------------");

//exercise20

const countDown=(n)=>{
   let timeid=setInterval(()=>{
    if(n==0){
       console.log("Bang Bang!")
       return clearInterval(timeid);
     }
    console.log(n);
     n--;
  },1000)
 };

countDown(10);

