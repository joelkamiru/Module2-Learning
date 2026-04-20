// import sumfunction from './math.js';
import {multiply,divide} from './math.js';

// console.log(sumfunction(13,56));
// console.log(value)
// console.log(multiply(5,7));
// console.log(divide(4,1))

// console.log(global)



const myPromise= new Promise((resolve,reject)=>{
	let success = false;
	if (success){
		resolve("Operation successful");
	
	}
	else{
		reject("Operation Failed")
	}
})
myPromise
.then(result=>{console.log(result)})
.catch(error=>{console.log(error)})