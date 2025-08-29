const login_button = document.getElementById("login-button");
login_button.addEventListener("click", (e)=>{
    e.preventDefault();
    login();
});

function login() {
    const username = document.getElementById("username");
    const password_ = document.getElementById("password");
    let nameis = username.value;
    let pasis = password_.value;
    if(localStorage.getItem(nameis)){
        alert("username exist. choose a new one.");
    }
    else {
        localStorage.setItem(nameis, pasis);
        alert("successfully loged in.");
    }
    username.value = '';
    password_.value = '';
}
