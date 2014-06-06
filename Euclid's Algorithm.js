function Euclid(num1, num2) {

	if(num1 % num2 === 0) {
		return num2;
	}

	if(num1 % num2 !== 0) {
		var remainder === (num1 % num2);
		num1 === num2;
		num2 === remainder;

		return Euclid(num1, num2);
	}
}