const signup_button = document.getElementById("signup-button");
const passone = document.getElementById("passwordfirst");
const passtwo = document.getElementById("passwordsecond");
signup_button.addEventListener("click", ()=>{
    let a = passone.value;
    let b = passtwo.value;
    if(a != b) {
        alert("Both passwords didn't match!");
    }
    else if(a === "") {
        alert("please enter a strong password.");
    }
    else {
        signup();
    }
});

function signup() {
    alert("signup successful.");
}