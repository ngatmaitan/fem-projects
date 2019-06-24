//Create an object using bracket and dot notation that represents the characters and related data you may find in a game of Clue.


// object literal
var game = {};

// dot notation
game.murder = "??";

//bracket notation
game['weapons'] = [
	{type: 'lasers', location: 'lab'},
	{type: 'angry cats' .. },
	{... ' dish soap' ...}
];
//OR
game['weapons'] = ['lasers', 'angry cats', 'dish soap'];

game.name = [];
game.name[0] = 'Miss Scarlet';
game.name.push('Mr. Green');