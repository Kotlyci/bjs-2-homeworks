function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let avg = 0;
	let sum = 0;

	for (i = 0; i < arr.length; i++) {
		if (arr[i] !== undefined) {

			if (max < arr[i]) {
				max = arr[i];
			};

			if (min > arr[i]) {
				min = arr[i];
			};

			if (typeof arr[i] === "number" && arr[i] !== NaN) {
				sum += arr[i];
				avg = sum / arr.length;
			};
		};
	};

	return {
		min: min,
		max: max,
		avg: Number(avg.toFixed(2))
	};


};

function summElementsWorker(...arr) {
	let sum = 0;
	for (i = 0; i < arr.length; i++) {
		sum += arr[i];
	};
	return sum;
};

function differenceMaxMinWorker(...arr) {
	min = Infinity;
	max = -Infinity;

	if (arr.length === 0) return 0;

	for (i = 0; i < arr.length; i++) {
		if (max < arr[i]) {
			max = arr[i];
		};

		if (min > arr[i]) {
			min = arr[i];
		};
	};

	let difference = max - min;
	return difference;
};

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		};
	};

	return sumEvenElement - sumOddElement;
};

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;

	if (arr.length === 0) return 0;

	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		};
	};

	if (sumEvenElement !== countEvenElement) {

		return sumEvenElement / countEvenElement;
	};
};

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let i;
	let res;
	let numbers;

	if (arrOfArr.length === 0) return 0;

	for (i = 0; i < arrOfArr.length; i++) {
		numbers = arrOfArr[i];
		res = func(...numbers);
		if (res > maxWorkerResult) maxWorkerResult = res;
	};

	return maxWorkerResult;
};