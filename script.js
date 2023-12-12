//your JS code here. If required.
const student = {
	name : "Debasis",
}

Object.prototype.getKeys(){
	return Object.keys(this);
}

console.log(student.getKeys());
