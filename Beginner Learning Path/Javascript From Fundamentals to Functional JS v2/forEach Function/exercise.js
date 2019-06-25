// Complete the rest of this function so that it works as described in the previous slides:
// _.each = function(list, callback) {
//	//... TODO
//}
//
// Write w/ each.
// function CreateSuspectObjects(name) { 
//   return { 
//     name: name,   
//     color: name.split(' ')[1],   
//     speak() {log(`my name is ${name}`);}
//   }; 
// }; 
//
//
// var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White']; 
//
// var suspectsList = [];
// for(var i = 0; i < suspects.length; i++){ 
//   suspectsList.push(CreateSuspectObject(suspects[i])); 
// }
_.each(suspects, function(name){
	suspectsList.push(name);
});

// ACTUAL SOLUTION
const _ = {};

_.each = function(list, callback) {
	// check to see if list is array or object
	// then loop through accordingly
	if (Array.isArray(list)) {
		for (var i = 0; i < list.length; i++) {
			callback(list[i], i, list)
		}
	} else {
		for (var key in list) {
			callback(list[key], key, list)
		}
	}
}

._each(['sally', 'georgie', 'porgie'], function(name, i, list){
	if (list[i] + 1) {
		console.log(name, 'is younger than', list[i+1])
	} else {
		console.log(name, 'is the oldest')
	}
})
