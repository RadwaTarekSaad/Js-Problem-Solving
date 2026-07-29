//Q1.Convert the string "123" to a number and add 7
let x = Number("123") + 7  //or var x = +"123"  , x + 7
console.log(x); //130


//Q2.Check if the given variable is falsy and return "Invalid" if it is.

let y=0;
if(!y){ //!true
    console.log("Invalid");
}




//Q3.Use for loop to print all numbers between 1 and 10, skipping even numbers using continue

for(let i=1;i<=10;i++){
    if(i%2===0){
        continue;
    }
    console.log(i);
    }



//Q4.Create an array of numbers and return only the even numbers using filter method.
let z=[1, 2, 3, 4, 5]
let g=z.filter((item)=>{ return item % 2 === 0})
console.log(g)



//Q5.Use the spread operator to merge two arrays, then return the merged array.
let arr1=[1, 2, 3]
let arr2=[4, 5, 6]
let arr3=[...arr1,...arr2]
console.log(arr3)

////or if in function Q5
let arr4=[1, 2, 3]
let arr5=[4, 5, 6]
function mergeArr(arr4,arr5){
    let arr6=[...arr4,...arr5];
    return arr6
}

let mergedArr=mergeArr(arr4,arr5);
console.log(" mergedArr:", mergedArr)







//Q6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday).
let numberOfTheDay=5

switch(numberOfTheDay){
    case 1:
        console.log("Sunday");
        break;
        case 2:
            console.log("Monday");
            break;
            case 3:
                console.log("Tuesday");
                break;
                case 4:
                    console.log("Wednesday");
                    break;
                    case 5:
                        console.log("Thursday");
                        break;
                        case 6:
                            console.log("Friday");
                            break;
                            case 7:
                                console.log("Saturday");
                                break;
                                default:
                                    console.log("not exist");

}



//Q7.Create an array of strings and return their lengths using map method

let arrChars=["a", "ab", "abc"];
let numberOfChars=arrChars.map((chars)=>{return chars.length })
console.log( numberOfChars);



//Q8.Write a function that checks if a number is divisible by 3 and 5.
 
function isDivisible(x){
    if(x%5===0 && x%3===0)
        {   
            console.log("Divisible by both")
      }else if(x%5===0){
        console.log("Divisible by 5")
      }else if(x%3===0){
         console.log("Divisible by 3")

      }else{
        console.log("not divisible by both")
      }
      }

 isDivisible(15)



 //Q9.Write a function using arrow syntax to return the square of a number
let getSquare=(x)=>{
return x**2
}
let squarednumber=getSquare(5);
console.log(squarednumber)//25

 
//Q10.Write a function that destructures an object to extract values and returns a formatted string.


function getInformation({name,age}){
    return `${name} is ${age} years old`

}

const person={
    name: 'John',
     age: 25
}

let personInfo=getInformation(person)
console.log(personInfo);



//Q11.Write a function that accepts multiple parameters (two or more) and returns their sum.

function getSum(...nums){
   let sum=0;
    for(i=0;i<nums.length;i++){
        sum+=nums[i]
    }
    return sum
}
let addition=getSum(5,5,5);
console.log(addition);


//Q12.Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.

function getSuccess(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
               resolve("success")
        },3000)

    })
}
getSuccess().then((result)=>{
    console.log(result)
})

////Example promise with api & with setTimeOut
 function getSuccessExample(){
    return new Promise((resolve,reject)=>{

        let x=new XMLHttpRequest();
        x.open("GET","https://forkify-api.jonas.io/api/v2/recipes?search=pizza");
        x.responseType="json";
        x.send();
        x.addEventListener("loadend",function(){
          if(x.status>=200 && x.status<300){
             setTimeout(()=>{
                 console.log(x.response)
             },4000)
           return  setTimeout(() => {
            resolve("Success Example");
             }, 3000);
        }
        
         return  reject();
          
      
        })

    })
}
getSuccessExample().then((result)=>{
    console.log(result)
})



//Q13.Write a function to find the largest number in an array.
function largestNumber(arr){
let max=0;
let largest = arr.reduce((acc, current) => {
    if(acc > current){
        max=acc
    }else{
        max=current;
    }
    return max
},arr[0]);

return largest;

}

let largestInArr =largestNumber([1, 3, 7, 2, 4])
console.log("largest Number in the array:" ,largestInArr);

////another way to Q13

function theLargestNumberEx(arrEx){
   let max=arrEx[0]
    for(let i=1;i<arrEx.length;i++){
       
            if(arrEx[i]>max){
            max=arrEx[i];
            
            }
        }
        

    return max;


}
let largestEx=theLargestNumberEx([1,3,7,2,4]);
console.log("max in array is:",largestEx);




// Q14.Write a function that takes an object and returns an array containing only its keys.

function getKeys(obj){
let objEntry=new Map(Object.entries(obj));
 let arrKey=  [...objEntry.keys()]
 return arrKey
}

let user={
    name:"john",
    age:30
}

let userKeys=getKeys(user);
console.log("The Keys Of An Object:",userKeys);


//////another way to Q14

function getKeysSecond(obj){
   let objKeys=[];
for(let user in obj  ){
    objKeys.push(user)
   }
 return objKeys;
}

let user2={
    name:"john",
    age:30
}

let userKeys2=getKeysSecond(user);
console.log("The Keys Of An Object:",userKeys2);



//Q15.Write a function that splits a string into an array of words based on spaces.

function getArrayOfStrings(str){
let s= str.split(" ")
return s;
}
let str="The quick brown fox"
let splittingStr= getArrayOfStrings(str);
console.log("The Splitting Array :",splittingStr)



/*****************************************************************************************************************************/


//part2-Essay:

// Q1.What is the difference between forEach and for...of? When would you use each?


// for Each ==> it loops on arrays,cannot use continue or break ,await in it,slower because it makes callback every time,
// use it when you want to make the same function to each element in array and if i will not use break or continue or promise
//it doesn't  wait until the process that takes time to end skip it.



// for of  ==> it loops on any iterable obj or array...,i can use continue or break or await,faster,more flexible to use
//  if i want to use continue or promise or break it wait until the process end then go to the next line




/*****************************************************************************************************************************/


//Q2.What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.

//hoisting is a Js behavior it makes all declarations in the top var,let,const,functions
//forExample:
//console.log(x) it will be undefined because var x will be in the top  
//var x=10

//let and const also hoisting applied on them 

//forExample
//console.log(x) x will hoist but because let and const in es6 x will obtain cannot be accessed before initialization
//let x=10

//let and const make (TDZ) temporal dead zone is the place before initialization
//Example:

//TDZ

//console.log(x) cannot be accessed before initialization

//let x=10 


/*************************************************************************************************************************/

//Q3.What are the main differences between == and ===?
// double equal (==) :  compare between 2 values only
//Example:
// 5=="5"    true

//trible equal (===):compare between value and type
//Example:
// 5==="5"  false

/**********************************************************************************************************************/

//Q4.Explain how try-catch works and why it is important in async operations.

//try and catch we put in try the code and if there is any errors will go on catch (e) without stopping the app it will continue
//the rest of the code and it is important because in async if there is error in server or something will go on catch
//and print the error and handle it instead of crash the app 


/********************************************************************************************************************/


//Q5.What’s the difference between type conversion and coercion?
//coercion ===> implicit conversion the js make
//Example:
// 5 * "6" =30  Js will convert 6 to a number to multiply it with 5

//conversion ===> Explicit convert by methods like Number(),String()
//Example:
//5 + Number("5") = 10  



/********************************************************************************************************************/









