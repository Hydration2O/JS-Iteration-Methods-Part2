// You are given an array representing a series of transactions in a small business. 
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
    ["income", 1000],
    ["income", 1500],
    ["expense", 500],
    ["expense", 300],
    ["income", 700],
];

/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]

Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/
// function printIncome(){
//    return transactions.filter((income)=>income[0]==="income"); //income[0] == transactions[i][0]
// }
const incomeStatement=transactions.filter(elem=>elem[0] ==="income");
const expenseStatement=transactions.filter(elem=>elem[0] ==="expense");
console.log(incomeStatement);
console.log(expenseStatement);


/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200

Task 4) Calculate the total expenses and return it.
       Output 4) 800

******************************************************************/
const totalIncome = incomeStatement.map((elem)=>(elem=elem[1])).reduce((total,elem)=>total+=elem);
const totalExpense = expenseStatement.map((elem)=>(elem=elem[1])).reduce((total,elem)=>total+=elem);
console.log(totalIncome);
console.log(totalExpense);


/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400

Task 6) Identify and create a new array with transactions (both incomes and expenses) above  or equal to $500.
       Output 6) [["income", 1000], ["income", 1500], ["expense", 500], ["income", 700]]

******************************************************************/
let netProfit=totalIncome-totalExpense;
console.log(netProfit);

const above500array = transactions.filter((elem)=>(elem[1]>=500));
console.log(above500array);



// Note: Use appropriate JavaScript array iteration methods such as filter, reduce, etc., to achieve the desired output for each task.
