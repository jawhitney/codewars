function greet(myName, yourName){
	return "Hello " + yourName + ", my name is " + myName;
}

console.log(greet('jdubb', 'jw'));

var person = function(name) {
	this.name = name;
};

person.prototype.greet = function(name) {
	return 'Hello ' + name + ', my name is ' + this.name;
};
