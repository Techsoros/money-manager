document.getElementById('deposit-btn').addEventListener('click', function () {



    let depositValue = document.getElementById('deposit-value').value;
    let depositPrevious = document.getElementById('d-value').innerText;
    let total = document.getElementById('t-value').innerText;

    if (isNaN(depositValue) || depositValue.trim().length == 0) {
        alert('Please Insert Number');
        document.getElementById('deposit-value').value = "";
        return;
    }

    document.getElementById('d-value').innerText = Math.abs(parseFloat(depositValue)) + parseFloat(depositPrevious);

    document.getElementById('t-value').innerText = Math.abs(parseFloat(depositValue)) + parseFloat(total);
    document.getElementById('deposit-value').value = "";

})

document.getElementById('withdraw-btn').addEventListener('click', function () {

    let withdrawValue = document.getElementById('withdraw-value').value;

    let withdrawPrevious = document.getElementById('w-value').innerText;

    let total = document.getElementById('t-value').innerText;

    if (isNaN(withdrawValue) || withdrawValue.trim().length == 0) {
        alert('Please Insert Number');
        document.getElementById('withdraw-value').value = "";
        return;
    }
    if (parseFloat(withdrawValue) > parseFloat(total)) {
        alert("Insufficient Balance");
        document.getElementById('withdraw-value').value = "";
        return;


    }

    document.getElementById('w-value').innerText = Math.abs(parseFloat(withdrawValue)) + parseFloat(withdrawPrevious);
    document.getElementById('t-value').innerText = parseFloat(total) - Math.abs(parseFloat(withdrawValue));
    document.getElementById('withdraw-value').value = "";
})