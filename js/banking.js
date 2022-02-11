//--------------input function--------------------- 
function inputFunction(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputAmount = parseFloat(inputValue.value);
    inputValue.value = '';
    return inputAmount;
}
//----------------moneyTransaction function------------------------- 
function moneyTransaction(transactionMoney, inputFildMoney) {
    const totalTransaction = document.getElementById(transactionMoney);
    const lastTotalTransaction = parseFloat(totalTransaction.innerText);
    const updateTotalTransaction = lastTotalTransaction + inputFildMoney;
    totalTransaction.innerText = updateTotalTransaction;
}

//----------------add Ebent listener Button----------------------------
document.getElementById('deposite-btn').addEventListener('click', function () {

    //---------deposite money input function call--------------------
    const addDepositeAmount = inputFunction('deposite-amount');

    //-----------------deposite money function call -------------------
    moneyTransaction('deposite-total', addDepositeAmount);

    //------------total balance update ---------------------------
    const totalBalance = document.getElementById('my-acount');
    const lastBalance = totalBalance.innerText;
    updateBalance = parseFloat(addDepositeAmount) + parseFloat(lastBalance);
    totalBalance.innerText = updateBalance;
})

//-----------------------------withdraw money-------------------------
document.getElementById('withdraw-btn').addEventListener('click', function () {

    //-----------------withdraw input function call ---------------------
    const nextWithdraw = inputFunction('Withdraw-amount');

    //------------------withdraw money function call---------------------
    moneyTransaction('withdraw-total', nextWithdraw);

    // update my acount 
    const totalBalance = document.getElementById('my-acount');
    const lastBalance = totalBalance.innerText;
    updateBalance = parseFloat(lastBalance) - nextWithdraw;
    totalBalance.innerText = updateBalance;
})
//------------------------balance dynamic----------------------

