//--------------deposite money--------------------- 
function inputFunction(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputAmount = inputValue.value;
    inputValue.value = '';
    return inputAmount;
}
document.getElementById('deposite-btn').addEventListener('click', function () {

    const addDepositeAmount = inputFunction('deposite-amount');
    const depsiteTotal = document.getElementById('deposite-total');
    const privusDepositeTotal = depsiteTotal.innerText;
    const updateDepositeTotal = parseFloat(privusDepositeTotal) + parseFloat(addDepositeAmount);
    depsiteTotal.innerText = updateDepositeTotal;

    //------------total balance update ---------------------------
    const totalBalance = document.getElementById('my-acount');
    const lastBalance = totalBalance.innerText;
    updateBalance = parseFloat(addDepositeAmount) + parseFloat(lastBalance);
    totalBalance.innerText = updateBalance;


})
//-----------------------------withdraw money-------------------------
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const nextWithdraw = inputFunction('Withdraw-amount');
    const totalwithdraw = document.getElementById('withdraw-total');
    const lastWithdraw = totalwithdraw.innerText;
    const updateWithdraw = parseFloat(nextWithdraw) + parseFloat(lastWithdraw);
    totalwithdraw.innerText = updateWithdraw;

    // update my acount 

    const totalBalance = document.getElementById('my-acount');
    const lastBalance = totalBalance.innerText;
    updateBalance = parseFloat(lastBalance) - parseFloat(nextWithdraw);
    totalBalance.innerText = updateBalance;

})
//------------------------balance dynamic----------------------

