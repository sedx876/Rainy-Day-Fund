export const formatDollarValues = (numString) => {
	if(numString == ""){
	   return '0';
	}

	if(isNaN(numString)){
	   return '0';
	}

	let number = Number(numString);
	let formattedNumber = number.toLocaleString("en");
	return formattedNumber;
}

//take array of expense objects and caluclate total amount
export const calcTotalExpenses = (expenses) => {
	const totalExpenses = expenses.reduce((total, expense, curr)=> {
   		return total + expense.amount
	}, 0)

	return totalExpenses
}