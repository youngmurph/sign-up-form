function validatePassword() {
    const wrongpwd = document.getElementById("incorrect");
    let pwd = document.getElementById("pwd");
    let confirmpwd = document.getElementById("confirmpwd");

    if (pwd.value !== confirmpwd.value) {
        wrongpwd.innerHTML = "Re-enter password and try again.";
        wrongpwd.style.color = "Red";
        wrongpwd.style.fontSize = "12px";
        wrongpwd.style.fontFamily = "Arial";
        wrongpwd.style.fontWeight = "bolder";
        alert("Passwords do not match.");
        return false;
    } else {
        alert("You have registered successfully!")
        return true;
    }
    
}