const validUser = {
    email: 'zihad@gmail.com',
    password: '1234'
}

document.getElementById('login-button').addEventListener('click', function () {

    let userName = document.getElementById('user-name').value;
    let userPass = document.getElementById('user-password').value;

    if (userName == validUser.email && userPass == validUser.password) {

        window.location.href = "wallet.html";
    } else {
        alert('invalid Login');
    }

})