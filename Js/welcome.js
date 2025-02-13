
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (!loggedInUser) {
    alert('يرجى تسجيل الدخول أولاً');
    window.location.href = '/index.html';
} else {
    document.getElementById('welcome').innerHTML = `Welcome, ${loggedInUser.name}!`;
    document.getElementById('email').innerHTML = `Your Email: ${loggedInUser.email}`;
}
document.getElementById('logout').addEventListener('click', function () {
    localStorage.removeItem('loggedInUser'); // إزالة بيانات المستخدم الحالي فقط
    window.location.href = '/index.html';
});



// ohter solution
// document.getElementById('welcome').innerHTML= `welcome  ${localStorage.getItem('userName')} `;
// document.getElementById('email').innerHTML= `Your Email :  ${localStorage.getItem('userEmail')} `;
// document.getElementById('password').innerHTML= `Password:  ${localStorage.getItem('password')} `;
// let logout = document.getElementById('logout');

// logout.addEventListener('click', function(){
//     localStorage.clear()
//     window.location.href = '../Register/index.html'
// })