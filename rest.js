function collectItems(...items){
	console.log(items);
}
collectItems("pen","bag","book","pencil","calculator")

function sumNumbers(...numbers){
	let total=0;
	for (let number of numbers){
		total=total+number
	}
	return total
	
}
console.log(sumNumbers(10,45,67,2,34,56,8,90,23,20));