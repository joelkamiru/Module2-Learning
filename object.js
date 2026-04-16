let student={
	name:"NAncy",
	age:20,
	course:"Javascript"
}
// console.log(student.age)
// console.log(student.name)
// console.log(student.course)

//for..in
//object.keys()
//Object.entries
//Object.values

// for(let key in student){
// 	console.log(key,student[key])
// }
// console.log(Object.keys(student))
// Object.keys(student).forEach(function(key){
// 	console.log(`${key}:${student[key]}`);
// })

// //object.values(): an array of values
// const customer={
// 	name:"John",
// 	age:30,
// 	email:"john@gmail.com",
// 	isActive:true
// };
// console.log(Object.values(customer))

// // object.entries(): gives you an array of key-value pairs
// // console.log(Object.entries(customer))
// Object.entries(customer).forEach(function([key,value]){
// 	console.log(`${key}:${value}`);
// });
// //Destructive & Non-destructive operations 
// const inventory={
// 	apples:20,
// 	oranges:10
// }

// console.log(inventory)

// for (let key in inventory){
// 	inventory[key]-=5;

// }
// console.log(inventory)

// non-destructive operation
// const updatedInventory=Object.keys(inventory).reduce(function(acc,key){
// 	acc[key]=inventory[key]-2;
// 	return acc;
// },{});
// console.log(updatedInventory)
// console.log(inventory)

// nested object
const userInfo={
	firstName:"Jane",
	lastName:"Doe",
	age:28,
	employer:"Moringa School",
	jobTitle:"Technical Mentor",
	projects:[{title:"Chat App",description:"A messaging platform"},
		{title:"Task Manager",description:"An app for managing tasks"}
	],
	students:[{firstName:"Ziza",lastName:"Kariuki"},{},
	]
}
for (let key in userInfo){
	if (!Array.isArray(userInfo[key])){
		console.log(userInfo[key])
	}
}