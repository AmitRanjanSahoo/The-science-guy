window.onload = () => {
    if(localStorage.getItem("mode") === "dark") {
        document.body.classList.toggle("dark");
    }
}

function changemode() {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }
    else {
        localStorage.setItem("mode", "light");
    }
}

function login(){
    
}

