/* isEven */

function isEven(num) {
	/* return true if even */
	if (num % 2 === 0) {
		return true;
	}
	else {
		/* return false otherwise */
		return false;
	}
} 

/* another option for isEven */

function isEven(num) {
	return num % 2 === 0;
}

isEven(40); 

/* factorialize a number*/

function factorial(num) {
	if(num === 0 || num === 1) {
		return 1;
	}
	return num * factorial(num - 1);
}

factorial(5);

	/* another option for factorial */
function factorial(num) {
	/* define a result variable*/
var result = 1;
/* calculate factorial and store value in result*/
for (var i = 2; i <= num; i++) {
	result *= i;
}
/* return the result variable*/
return result;
}

/* kebabToSnake function */

function kebabToSnake(str) {
	/* replace dashes with underscore */
	
	return str.replace(/-/g, "_");
	/* return string */
}

kebabToSnake("hello-world");





