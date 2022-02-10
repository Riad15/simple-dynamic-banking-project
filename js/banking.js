//--------------deposite money--------------------- 
document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-amount');
    const addDepositeAmount = depositeInput.value;
    const depsiteTotal = document.getElementById('deposite-total');
    const privusDepositeTotal = depsiteTotal.innerText;
    const updateDepositeTotal = parseFloat(privusDepositeTotal) + parseFloat(addDepositeAmount);
    depsiteTotal.innerText = updateDepositeTotal;
    depositeInput.value = '';
    //------------total balance update ---------------------------
    const totalBalance = document.getElementById('my-acount');
    const lastBalance = totalBalance.innerText;
    updateBalance = parseFloat(addDepositeAmount) + parseFloat(lastBalance);
    totalBalance.innerText = updateBalance;


})
//-----------------------------withdraw money-------------------------
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('Withdraw-amount');
    const nextWithdraw = withdrawInput.value;
    const totalwithdraw = document.getElementById('withdraw-total');
    const lastWithdraw = totalwithdraw.innerText;
    const updateWithdraw = parseFloat(nextWithdraw) + parseFloat(lastWithdraw);
    totalwithdraw.innerText = updateWithdraw;
    withdrawInput.value = '';

    // update my acount 

    const totalBalance = document.getElementById('my-acount');
    const lastBalance = totalBalance.innerText;
    updateBalance = parseFloat(lastBalance) - parseFloat(nextWithdraw);
    totalBalance.innerText = updateBalance;

})
//------------------------balance dynamic----------------------

