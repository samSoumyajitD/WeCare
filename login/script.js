const loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click", function() {
    const usernameInput = document.getElementById("usernameInput");
    const passwordInput = document.getElementById("passwordInput");

    
    const username = usernameInput.value;
    const password = passwordInput.value;

    
    if (username && password) {
        
        window.location.href = "../landing/index.html";
    }
     else {
        
        alert("Please enter both username and password.");
    }
});
