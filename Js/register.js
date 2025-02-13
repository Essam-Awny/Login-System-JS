
function register() {
    const userName = document.getElementById('userName').value.trim();
    const userEmail = document.getElementById('userEmail').value.trim();
    const password = document.getElementById('password').value;
    const rePassword = document.getElementById('rePassword').value;

    if (!userName || !userEmail || !password || !rePassword) {
        alert('All input is Required');
        return;
    }
    if (!validateEmail(userEmail)) {
        alert('Address email is not valid');
        return;
    }
    if (!validatePassword(password)) {
        alert('Password must be at least 3 characters long');
        return;
    }
    if (password !== rePassword) {
        alert('passwords do not match');
        return;
    }
        // old users
    let users = JSON.parse(localStorage.getItem('users')) || [];
    // check if the email is already registered
    const isEmailRegistered = users.some(user => user.email === userEmail);
    if (isEmailRegistered) {
        alert('this email is already registered');
        return;
    }
    // add new user
    const newUser = { name: userName, email: userEmail, password: password };
    users.push(newUser);

    // save users
    localStorage.setItem('users', JSON.stringify(users));

    alert('تم التسجيل بنجاح!');
    window.location.href = '/login.html';
}
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
function validatePassword(password) {
    const passwordPattern = /^[a-z]{3,}$/;
    return passwordPattern.test(password);
}




//other solution
// function register(){
//     const userName =document.getElementById('userName')
//     const userEmail =document.getElementById('userEmail')
//     const password =document.getElementById('password')
//     const rePassword =document.getElementById('rePassword')
    
//     if(userName.value == '' || userEmail.value=='' || password.value=='' || rePassword.value ==''){
//         window.alert('All input is Required')
//     }else{
//          localStorage.setItem('userName' , userName.value);
//          localStorage.setItem('userEmail' , userEmail.value);
//          localStorage.setItem('password' , password.value);
//          localStorage.setItem('rePassword' , rePassword.value);
//          window.location.href = '../login/login.html'
//     }

    
// }
