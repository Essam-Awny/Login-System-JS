
function login() {
    const userEmail = document.getElementById('userEmail').value.trim();
    const password = document.getElementById('password').value;

    if (!userEmail || !password) {
        alert('All input is Required');
        return;
    }
    // get saved users
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const foundUser = users.find(user => user.email === userEmail && user.password === password);
    if (foundUser) {
        // alert(`مرحبًا ${foundUser.name}!`);
        localStorage.setItem('loggedInUser', JSON.stringify(foundUser)); // save the logged-in user
        window.location.href = '/welcome.html';
    } else {
        alert('email or password is incorrect , try again');
    }
}



// ohter solution
// function login(){
//     const userEmail =document.getElementById('userEmail').value;
//     const password =document.getElementById('password').value;
//     let storedUserEmail = localStorage.getItem('userEmail') ;
//     let storedPassword = localStorage.getItem('password') ;

//     if(userEmail === storedUserEmail && password === storedPassword){
//         window.location.href = '../welcome/welcome.html'
//     }else{
//         alert('Invaild data! , Try again')
//     }
// }
