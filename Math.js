exports.add = function(a, b) {
	return a + b;
};

exports.subtract = function(a, b) {
	return a - b;
};

exports.multiply = function(a, b) {
	return a * b;
};

exports.divide = function(a, b) {
	if (0 === b) {
		return "Error! Division by zero.";
	}
	return a / b;
};

		
