let scores=[32, 78, 45, 90, 51, 39, 67];
let passingscores=[];
let i=0;

while(i<scores.length){
	if (scores[i]>=50){
		passingscores.push(scores[i]);
	}
	i++;
}
console.log(passingscores)

let messages = passingscores.map(function(score){
	return "Score " + score + ": Pass";
});
console.log(messages)

let totalScore= passingscores.reduce(function(acc,score){
	return acc+score;
},0);

let average= totalScore/passingscores.length;
console.log(average);


// ordering your array from the highest to the lowest
scores.sort(function(a,b){
	return b-a;
});
[32, 78, 45, 90, 51, 39, 67];
console.log(scores)
//[78,32,45,90,51,39,67]
//[78,45,32,90,51,39,67]
//[78,45,90]




