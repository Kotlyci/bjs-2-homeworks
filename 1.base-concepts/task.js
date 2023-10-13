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
  let percent = parseInt(percent) / 100 / 12; //Процентная ставка
  let contr = parseInt(contribution); //начальный взнос
  let amount = parseInt(amount); //Общая стоимость
  let loan = amount - contr; //Тело кредита
  let pay = loan * (percent + (percent / (((1 + percent)**countMonths) - 1))); //Ежемесячная оплата
  let totalAmount = (pay * countMonths).toFixed(2); 
  }
}
