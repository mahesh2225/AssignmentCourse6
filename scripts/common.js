function signUp(){
    let signInEl = document.getElementById('SignIn')
    signInEl.style.display = "none";
    let signUpEl = document.getElementById('SignUp')
    signUpEl.style.display = "block";
}
function close_signUp(){
    let signUpEl = document.getElementById('SignUp')
    signUpEl.style.display = "none";
}
function signIn(){
    let signUpEl = document.getElementById('SignUp')
    signUpEl.style.display = "none";
    let signInEl = document.getElementById('SignIn')
    signInEl.style.display = "block";
}

function close_signIn(){
    let signInEl = document.getElementById('SignIn')
    signInEl.style.display = "none";
}
