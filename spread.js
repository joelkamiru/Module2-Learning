// const colors=["red","blue","orange","green"]
// console.log(colors);//an array of colors
// console.log(...colors);//a single value

// // combining arrays with spread
// const activeUsers=["Alice","Brian"];
// const newUsers =["Grace","John"];

// const allUsers=[...activeUsers,...newUsers]
// console.log(allUsers)

// // copying arrays using spread
// const originalFruits=["apple","banana","orange"]
// const copyFruits=[...originalFruits];
// console.log(originalFruits)
// console.log(copyFruits)

// // spread with objects
// const user={
// 	name:"Nancy",
// 	age:26,
// 	email:"nancy@gmail.com"
// }
// const updatedUser={
// 	...user,
// 	email:"nancyt@gmail.com",
// 	city:"Kigali"
// };
// console.log(user);
// console.log(updatedUser)

// // combination of rest and spread 
// function collectNames(...names){
// 	console.log("Inside function:",names)
// }
// const students=["Alice","Brian","John"];//an array of students 
// collectNames(...students)// collectNames("Alice","Brian","John")


// function addNumbers(a,b){
// 	return a+b;
// }
// console.log(addNumbers(4,5,3))


const featuredProducts = ["Laptop", "Headphones", "Smartwatch"];
const newArrivals = ["4K Monitor", "Gaming Mouse"];
const onSaleProducts = ["Tablet", "Wireless Keyboard"];
const promotionalItem = "Gift Card";

const weeklyCatalog=[promotionalItem,...featuredProducts,...newArrivals,...onSaleProducts]
console.log(weeklyCatalog)