"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = (b ** 2 - 4 * a * c);

	if (d > 0) {
		let root1 = (-b + Math.sqrt(d)) / (2 * a);
		let root2 = (-b - Math.sqrt(d)) / (2 * a);

		arr.push(root1, root2);
		console.log(arr);
		return arr;

	} else if (d === 0) {
		let root3 = -b / (2 * a);

		arr.push(root3);
		console.log(arr);
		return arr;

	} else {
		console.log("Корней нет");
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = parseInt(percent) / 100 / 12; //Процентная ставка
  let c = parseInt(contribution); //начальный взнос
  let a = parseInt(amount); //Общая стоимость

  if (isNaN(p) || p < 0) {
    return `false`;
  } else {
    let s = a - c;
    let n = countMonths;
    let pay = s * (p + (p / (((1 + p)**n) - 1)));
    let totalAmount = (pay * n).toFixed(2);
		  console.log(totalAmount);
		  return +totalAmount;
  }
}