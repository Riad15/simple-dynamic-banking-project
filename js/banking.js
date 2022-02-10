document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-amount');
    const addDepositeAmount = depositeInput.value;
    const depsiteTotal = document.getElementById('deposite-total');
    const privusDepositeTotal = depsiteTotal.innerText;
    const updateDepositeTotal = parseFloat(privusDepositeTotal) + parseFloat(addDepositeAmount);
    console.log(updateDepositeTotal);
    depsiteTotal.innerText = updateDepositeTotal;
    depositeInput.value = '';

})