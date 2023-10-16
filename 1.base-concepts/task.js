"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;

	if (d > 0) {
		let root1 = (-b + Math.sqrt(d)) / (2 * a);
		let root2 = (-b - Math.sqrt(d)) / (2 * a);

		arr.push(root1, root2);

	} else if (d === 0) {
		let root3 = -b / (2 * a);

		arr.push(root3);

	} 

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let interestRate = parseInt(percent) / 100 / 12; 
	let deposit = parseInt(contribution); 
	let amountLoan = parseInt(amount);

	let bodyLoan = amountLoan - deposit;
	let pay = bodyLoan * (interestRate + (interestRate / (((1 + interestRate)**countMonths) - 1)));
	let totalAmount = (pay * countMonths).toFixed(2);
		return +totalAmount;
	
}
