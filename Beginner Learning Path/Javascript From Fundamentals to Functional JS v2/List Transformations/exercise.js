// Exercise 1
// Loop through the suspects array
// const game = {
// 	'suspects': [
// 		{
// 			name: "Rusty",
// 			color: "orange"
// 		}, {
// 			name: "Miss Scarlet",
// 			color: "red"
// 		}
// 	]
// }
for ( let i = 0; i < game['suspects'].length; i++){
	console.log(game['suspects'][i]);
}

// Exercise 2
// Loop through all the properties of the suspect objects in the suspects array, mark them if you think they are guilty
for ( let i = 0; i < game['suspects'].length; i++){
	for (var key in game.suspects[i]){
    	console.log(game.suspects[i][key]);
	}
}

for ( let i = 0; i < game['suspects'].length; i++){
	for (var key in game.suspects[i]){
    	if (game.suspects[i][key] === "Rusty") { console.log('found \'em'); }
		else { console.log('maybe next time'); }
	}
}

// Exercise 3
// Destructure this nested data structure into two variables with the strings 'red' and 'orange'
// var suspects = [
// 	{
// 		name: "Rusty",
// 		color: "orange"
// 	}, {
// 		name: "Miss Scarlet",
// 		color: "red"
// 	}
// ]
// BRACKET NOTATION
let color1 = suspects[0]["color"];
let color2 = suspects[1]["color"];
//DESTRUCTURING
let [color3, color4] = [suspects[0].color, suspects[1].color]
// the below will go deeper into the object
var [{color: firstColor}, {color: secondColor}] = suspects;
// the below will just assign both properties into the obj variable
// eg firstObj will return {name: "Rusty", color: "orange"}
var [firstObj, secondObj] = suspects;